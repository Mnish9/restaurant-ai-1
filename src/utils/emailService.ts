import sgMail from "@sendgrid/mail";

import { IMailContent, ISendMailContent } from "../interface/commonInterfaces";
import { EMAIL_SENT, MAIL } from "./constants";
import { getSecretKeys } from "../config/awsConfig";

export const sendMail = async (content: ISendMailContent, email: string) => {
  const keys = await getSecretKeys();
  sgMail.setApiKey(keys.sendgridApiKey);
  const mailData = {
    from: keys.senderEmail,
    to: email,
    subject: content.subject,
    text: content.text,
    html: content.htmlContent,
  };
  console.log("Sending email>>>>>>>>>>>>>>");

  try {
    const res = await sgMail.send(mailData);
    console.log("Email sent successfully>>>>>>>>>>>>>>>", res);

    return {
      isError: false,
      // messageId: res.headers["x-message-id"],
      message: EMAIL_SENT,
    };
  } catch (error) {
    console.log("Mail send failed", JSON.stringify(error));
    return {
      isError: true,
      errorMessage: error.message,
    };
  }
};

export const sendNewRegistrationEmail = async ({
  email,
  otp,
  subject,
}: {
  email?: string;
  otp?: number;
  subject?: string;
}) => {
  const template = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
    <title>Document</title>
  </head>
  
  <body style="background: #f6f6f6; font-family: 'PT Sans', sans-serif">
    <table style="width: 100%; max-width: 900px; margin: 0px auto; background: #fff" cellspacing="0px" cellpadding="0px">
      <tbody>
        <tr>
          <td style="background: #1f2326; padding: 10px 20px" align="center">
            <img src="../../../assets/images/logo-white.png" alt="logo" style="width: 200px; height: auto" />
          </td>
        </tr>
        <!-- <tr>
                <td>
                  <img src="{{asset('img/verification-bg.jpg')}}" alt="verification-bg" style="width: 100%;" />
                </td>
              </tr> -->
        <tr>
          <td style="padding: 20px 20px">
            <h4 style="
                    color: #1f2326;
                    text-align: center;
                    font-size: 40px;
                    font-weight: 600;
                    line-height: normal;
                    margin: 0px 0px 10px;
                  ">
              ${subject ?? MAIL.OTP_HEADING}
            </h4>
            <!-- <p style="color: #1F2326; text-align: center; font-size: 18px; font-weight: 400; line-height: normal; margin: 0px;">Use the following Verification code to verify.</p> -->
          </td>
        </tr>
        <tr>
          <td style="padding: 20px 20px 0px" align="center">
            <div style="
                  background-color: #e7f0e8;
                  padding: 30px 20px;
                  border-top: 6px solid #89b48c;
                ">
              <p style="
                    color: #000;
                    font-size: 20px;
                    font-weight: bold;
                    line-height: normal;
                    margin: 0px 0px 10px;
                  ">
                Use this Code
              </p>
              <span style="
                    color: #3d6140;
                    font-size: 45px;
                    font-weight: bold;
                    line-height: normal;
                    letter-spacing: 23.49px;
                    display: block;
                  ">${otp ? otp : email ? email : "-------------"}</span>
            </div>
          </td>
        </tr>
  
        <tr>
          <td style="background: #1f2326; padding: 30px 20px" align="center">
  
            <div style="text-align: center">
              <p style="
                color: #fff;
                font-size: 14px;
                font-weight: 400;
                line-height: normal;
                opacity: 0.5;
                margin: 0px;
              ">
                2023 © NextLPC™. All rights reserved.
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  
  </html>`;

  const content = {
    text: "New User",
    htmlContent: template,
    subject: "NextLPC Account Verification Code",
  };
  console.log("Email message generated...");
  const adminEmail = email;
  const response = await sendMail(content, adminEmail);
  return response;
};
