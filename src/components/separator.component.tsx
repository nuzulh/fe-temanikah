import { useRootState } from "../hooks";

export function Separator() {
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <hr
      className={`my-2 ${darkMode ? "border-white" : "border-grey-700"}`}
    />
  );
}
