import AWS from "aws-sdk";
import * as Sentry from "@sentry/node";
import { getSecretKeys } from "../config/awsConfig";

/** gettingPreSignedUrl
 *
 * @param str
 * @returns
 */
export const gettingPreSignedUrl = async (
  filePath: string,
  fileFormat: string
): Promise<string> => {
  const keys = await getSecretKeys();
  return new Promise((resolve, reject) => {
    const s3 = new AWS.S3({
      params: { Bucket: keys.bucket },
      signatureVersion: "v4",
    });
    const params = {
      Key: `${filePath}`,
      Bucket: keys.bucket,
      ContentType: fileFormat,
      ACL: "public-read",
      Expires: 60 * 60,
    };

    try {
      s3.getSignedUrl("putObject", params, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    } catch (error) {
      Sentry.captureException(error);
      return reject(error);
    }
  });
};
