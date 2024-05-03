import fs from "fs";
import awsConfig, { getSecretKeys } from "../config/awsConfig";
import axios from "axios";
import { ResponseObject } from "../interface/commonInterfaces";
import { API_RESPONSE_MSG } from "./constants";
import { Types } from "mongoose";

const outputLocationPath = "./src/assets/receipt.pdf";
// Function to check if OTP is valid
export const isOTPValid = (otp_created_ts: number): boolean => {
  const currentTime = new Date().getTime(); // Get the current time in milliseconds
  const otpValidityDuration = 15 * 60 * 1000; // 15 minutes in milliseconds

  // Check if the difference between current time and OTP creation time is within the validity duration
  return currentTime - otp_created_ts <= otpValidityDuration;
};

export const downloadFile = async (url: string): Promise<ResponseObject> => {
  const response = await axios({
    url,
    method: "get",
    responseType: "stream",
  });

  const writer = fs.createWriteStream(outputLocationPath);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", () =>
      resolve({
        success: true,
        message: API_RESPONSE_MSG.file_download_success,
      })
    );
    writer.on("error", (error) => {
      console.log("Error in downloading file>>>>>", error);

      reject({ success: false, message: "An error occurred", error });
    });
  });
};

export async function uploadFileToS3(s3Key: string) {
  const keys = await getSecretKeys();
  const fileContent = fs.readFileSync(outputLocationPath);

  const params: AWS.S3.PutObjectRequest = {
    Body: fileContent,
    ContentEncoding: "base64",
    ContentType: "application/pdf",
    ACL: "public-read",
    Key: s3Key,
    Bucket: keys.bucket,
  };

  return awsConfig.s3.upload(params).promise();
}
export const idToObjectIdConversion = (id: string): Types.ObjectId => {
  return new Types.ObjectId(id);
};

export async function calculateScores(
  allCategories: string[],
  correctOptionsByCategory: Record<string, number>,
  totalAnswersByCategory: Record<string, number>
) {
  return new Promise(async (resolve) => {
    const score = {};
    allCategories.map((categoryName) => {
      if (correctOptionsByCategory[categoryName]) {
        score[categoryName] = +(
          (correctOptionsByCategory[categoryName] /
            totalAnswersByCategory[categoryName]) *
          100
        ).toFixed(2);
      } else {
        score[categoryName] = 0;
      }
    });
    resolve(score);
  });
}
