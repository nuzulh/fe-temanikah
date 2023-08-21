import { RootState } from "../../types";

export function getDefaultState(): RootState {
  return {
    appState: {
      selectedMenu: "HOME",
      colorMode: "LIGHT",
      language: "ID",
      isLoading: false,
    },
    authState: {
      user: null,
      // isError: false,
      // error: null,
    },
  };
}
