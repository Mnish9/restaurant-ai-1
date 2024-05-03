export declare interface ResponseObject<T = unknown> {
  status?: boolean;
  success: boolean;
  message: string;
  data?: T;
  code?: number;
  error?: string;
}

export interface EnvConfig {
  env: string;
  port: number;
  databaseUrl: string;
  profile: string;
  bucket: string;
  secretManagerKey: string;
  region: string;
  jwtSecret: string;
  cryptoSecretKey: string;
  sendgridApiKey: string;
  senderEmail: string;
  sentryDsn: string;
  openAiKey: string;
}

export interface IMailContent {
  subject: string;
  text: string;
  htmlContent: string;
  from?: string;
  to?: string;
}

export interface ISendMailContent {
  subject: string;
  text: string;
  htmlContent: string;
}

export interface IMessage {
  mt: string;
  clientId: string;
  uuid?: string;
  message: string;
  time?: string;
  isBot: boolean;
  narrationId: string;
  chatHistory?: { userQuestion: string; botReply: string }[];
}
