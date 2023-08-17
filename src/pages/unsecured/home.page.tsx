import { useDispatch } from "react-redux";
import { useRootState } from "../../hooks";
import { hideLoadingAction, showLoadingAction } from "../../redux";

export function Home() {
  const dispatch = useDispatch();
  const isLoading = useRootState((state) => state.appState.isLoading);

  return (
    <>
      <div className="flex gap-6">
        <button onClick={() => dispatch(showLoadingAction())}>start</button>
        <button onClick={() => dispatch(hideLoadingAction())}>stop</button>
      </div>
      <h1>is loading: {isLoading.toString()}</h1>
    </>
  );
}
