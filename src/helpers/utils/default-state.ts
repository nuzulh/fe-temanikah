import { RootState } from "../../types";

export function getDefaultState(): RootState {
  return {
    appState: {
      selectedMenu: "DASHBOARD",
      colorMode: "LIGHT",
      language: "ID",
      isLoading: false,
      isError: false,
      apiError: null,
      errorMessage: null,
    },
    authState: {
      user: null,
      // isError: false,
      // error: null,
    },
  };
}
