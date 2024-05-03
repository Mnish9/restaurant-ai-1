import * as AWS from "aws-sdk";
import {
  AWSError,
  config,
  SecretsManager,
  SharedIniFileCredentials,
} from "aws-sdk";

import envConfig from "./envConfig";

import { EnvConfig } from "../interface/commonInterfaces";

const CONFIG: EnvConfig = envConfig();

const Bucket = CONFIG.bucket;

if (CONFIG.env === "local") {
  const CREDENTIALS = new SharedIniFileCredentials({ profile: CONFIG.profile });
  config.credentials = CREDENTIALS;
}

let secretKeys;

export const getSecretKeys = async (): Promise<any> =>
  new Promise((resolve, reject) => {
    if (!secretKeys) {
      const client = new SecretsManager({
        region: CONFIG.region,
      });

      client.getSecretValue(
        {
          SecretId: CONFIG.secretManagerKey,
        },
        (err: AWSError, data: SecretsManager.Types.GetSecretValueResponse) => {
          if (err) {
            reject(err);
          } else {
            secretKeys = JSON.parse(data.SecretString);
            resolve(secretKeys);
          }
        }
      );
    } else {
      resolve(secretKeys);
    }
  });

export default {
  s3: new AWS.S3({ params: { Bucket } }),
};
