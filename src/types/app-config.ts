export declare type Environment = "DEVELOPMENT" | "PRODUCTION";

export declare type AppConfig = {
  ENVIRONMENT: Environment;
  APP_NAME: string;
  APP_VERSION: string;
  SERVICE_URL: string;
};
