import { AppConfig, Environment } from "../../types";

const currentEnv: Environment = "DEVELOPMENT";
const devServiceUrl = "http://34.101.233.147:5000/api";
const prodServiceUrl = "http://localhost:5000/api";

export const appConfig: AppConfig = {
  ENVIRONMENT: currentEnv,
  APP_NAME: "Temanikah",
  APP_VERSION: "0.0.1",
  SERVICE_URL: currentEnv === "DEVELOPMENT"
    ? devServiceUrl
    : prodServiceUrl,
};
