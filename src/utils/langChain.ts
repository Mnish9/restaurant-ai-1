import { ChatOpenAI } from "@langchain/openai";
import envConfig from "../config/envConfig";
import { ExamServices } from "../features/examSets/services";
import { IMessage } from "../interface/commonInterfaces";

import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { TiktokenModel, encoding_for_model } from "tiktoken";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const openAiModels = [
  // { name: "gpt-4-turbo", limit: 100000 },
  // { name: "gpt-4" },
  { name: "gpt-3.5-turbo", limit: 8000 },
];

class LangChain {
  static InvokeLangChain = async ({
    message,
    ws,
  }: {
    message: IMessage;
    ws: any;
  }) => {
    const chatHistory = [...message.chatHistory];

    const stringArray = ["I am working on it", "let me think", "working on it"];
    const randomItem =
      stringArray[Math.floor(Math.random() * stringArray.length)];

    const sendMessageGreet: IMessage = {
      clientId: message.clientId,
      narrationId: message.narrationId,
      message: randomItem,
      isBot: true,
      mt: "message_upload_confirm",
      chatHistory,
    };

    setTimeout(() => {
      ws.send(JSON.stringify(sendMessageGreet));
    }, 4500);

    const simulationData = await this.getSimulationData(message.narrationId);
    console.log("simulationData>>>>>", simulationData);

    delete simulationData["narration"]["exam_id"];
    delete simulationData["narration"]["_id"];

    const finalContext = { ...simulationData, chatHistory };

    const finalContextString = JSON.stringify(finalContext);

    for (let i = 0; i < openAiModels.length; i++) {
      // Loop to process on multiple openAiModels

      const currentModel = openAiModels[i];
      console.log("currentModel>>>>>>>>>>>>..", currentModel);

      const chat = new ChatOpenAI({
        apiKey: envConfig().openAiKey,
        modelName: currentModel.name,
      });

      const enc = encoding_for_model(currentModel.name as TiktokenModel);
      const finalContextToken = enc.encode(finalContextString).length;
      const token = enc.encode(message.message);
      const splitContext = [];
      if (finalContextToken > currentModel.limit) {
        const MAX_TOKENS = 10000;

        let startIndex = 0;
        while (startIndex < finalContextString.length) {
          const endIndex = startIndex + MAX_TOKENS;
          const contextChunk = finalContextString.substring(
            startIndex,
            endIndex
          );
          splitContext.push(contextChunk);
          startIndex = endIndex;
        }
        // finalContextString.split()
      } else {
        splitContext.push(finalContextString);
      }

      console.log("finalContextToken>>>>>>>>>>>", finalContextToken);
      console.log("tokens>>>>>>>>>>>", token.length);
      // if (finalContextToken) {
      // }
      const outputParser = new StringOutputParser();

      const prompt = ChatPromptTemplate.fromMessages([
        [
          "system",
          `You are an intelligent chatbot system.
          Answer the following question based only on the provided context and history, don't go outside the provided context and history:
        {context}

        max answer length: 5 lines

       Don't use word "provided context" in your answer.
        `,
        ],
        ["user", "{input}"],
      ]);

      try {
        const chain = prompt.pipe(chat).pipe(outputParser);
        let reply = "";
        // const simulationDataString = JSON.stringify(simulationData);

        for (let splitIndex in splitContext) {
          // console.log("generalInfo>>>>>>>>>>>>>", generalInfo[general]);
          const reply_chain = await chain.invoke({
            context: splitContext[splitIndex],
            input: message.message,
          });
          reply = reply_chain;
        }

        console.log("reply>>>>>>>>>>>>>", reply);

        chatHistory.push({
          userQuestion: message.message,
          botReply: reply,
        });

        const sendMessage: IMessage = {
          clientId: message.clientId,
          narrationId: message.narrationId,
          message: reply,
          isBot: true,
          mt: "message_upload_confirm",
          chatHistory: chatHistory,
        };
        console.log(">>>>>>>sendMessage", sendMessage);

        return sendMessage;
      } catch (error) {
        console.log("error>>>>>>>>>>>>>>", error);
        console.log("error>>>>code >>>>>>>>>>", error.response);

        console.error(`Error with model ${currentModel.name}:`, error.message);

        if (
          error.message.includes("quota") ||
          error.message.includes("limit")
        ) {
          console.log(
            `Switching from ${currentModel.name} due to quota limit.`
          );
        } else {
          return error;
        }
      }
    }
  };

  static recursiveCharacterTextSplitter = async (text: string) => {
    const splitter = new RecursiveCharacterTextSplitter();

    const splitText = await splitter.splitText(text);

    return splitText;
  };

  static getSimulationData = async (narrationId: string) => {
    try {
      const narrationRes = await ExamServices.getNarrative(narrationId);
      // console.log("narrationRes>>>>", narrationRes);
      const simulationTemplate = {};

      if (narrationRes.success) {
        Object.assign(simulationTemplate, { narration: narrationRes.data });
        const examId = narrationRes.data.exam_id.toString();

        const sessionAndQuestions = await ExamServices.getSessionsAndQuestions(
          narrationId,
          examId
        );
        // console.log("sessionAndQuestions>>>>>>>>>>>", sessionAndQuestions);
        if (sessionAndQuestions.success) {
          Object.assign(simulationTemplate, {
            session_questions: sessionAndQuestions.data,
          });
          // const temp = {};
          // sessionAndQuestions.data.forEach((session) => {
          //   Object.assign(temp, {
          //     [session.session_name]: session.details,
          //     [`${session.session_name} questions`]: session.questions,
          //   });
          // });
          // console.log("temp>>>>>>>>>", temp);
        }
      }
      return simulationTemplate;
    } catch (error) {
      console.log("error>>>>>", error);
      // throw new Error("Error in getting simulation data: " + error.message);
    }
  };

  // static getSessionQuestionOptionAnswer = async (
  //   narrationId: string,
  //   examId: string
  // ) => {
  //   const questionData = await SessionAndQuestionsModel.aggregate([
  //     {
  //       $match: {
  //         $expr: {
  //           $eq: ["$narration_id", { $toObjectId: id }],
  //         },
  //       },
  //     },
  //     {
  //       $lookup: {
  //         from: "exam_questions",

  //         let: { sessionAndQuestionId: "$_id" },
  //         pipeline: [
  //           {
  //             $match: {
  //               $expr: {
  //                 $and: [
  //                   { $eq: ["$exam_id", idToObjectIdConversion(examId)] },
  //                   {
  //                     $eq: [
  //                       "$session_and_question_id",
  //                       "$$sessionAndQuestionId",
  //                     ],
  //                   },
  //                   { $eq: ["$narration_id", { $toObjectId: id }] },
  //                 ],
  //               },
  //             },
  //           },
  //         ],
  //         as: "exam_questions",
  //       },
  //     },
  //     {
  //       $match: {
  //         "exam_questions.exam_id": idToObjectIdConversion(examId),
  //       },
  //     },
  //     {
  //       $project: {
  //         _id: 1,
  //         session_name: 1,
  //         details: 1,
  //         exam_questions: "$exam_questions",
  //       },
  //     },
  //   ]).sort({ _id: 1 });
  // };
}

export default LangChain;
