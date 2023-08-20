import { LogService } from "./log.service";

export function createLogService(): LogService {
  return {
    debug(message) {
      console.log(`[DEBUG] ${message}`);
    },
    table(data) {
      console.table(data);
    },
    json(data) {
      console.log(JSON.stringify(
        data, null, 2
      ));
    },
    error(error) {
      console.error(
        error.stack
          ? `${error.message}\n${error.stack}`
          : error.message
            ? error.message
            : error
      );
    }
  };
}
