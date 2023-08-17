
import { createContext } from "react";
import { SelectStateFn, ServicesContext } from "../types";
import { createLogService } from "./log";

export const Services = createContext<ServicesContext>({} as ServicesContext);

export function createServices(
  select: SelectStateFn,
): ServicesContext {
  const logService = createLogService();

  return {
    logService,
  };
}

export * from "./log";
