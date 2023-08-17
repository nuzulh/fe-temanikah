export interface LogService {
  info(message: string): void;
  debug(message: string): void;
  table(data: object): void;
  json(data: object): void;
  error(error: Error): void;
}
