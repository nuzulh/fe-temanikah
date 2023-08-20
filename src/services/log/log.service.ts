export interface LogService {
  debug(message: string): void;
  table(data: object): void;
  json(data: object): void;
  error(error: Error | any): void;
}
