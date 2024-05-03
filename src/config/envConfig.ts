import env from "../../env.json";
import { EnvConfig } from "../interface/commonInterfaces";
import { CONST_DATA } from "../utils/constants";

const envConfig = (): EnvConfig => {
  const nodeEnv = process.env.NODE_ENV || CONST_DATA.local;
  return env[nodeEnv];
};

export default envConfig;
