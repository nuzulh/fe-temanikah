import { useSelector } from "react-redux";
import { RootState } from "../types";

export function useRootState<T>(cb: (_: RootState) => T) {
  const result = useSelector((state: RootState) => cb(state));
  return result;
}
