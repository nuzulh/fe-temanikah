import { useDispatch } from "react-redux";
import { useRootState } from "./hooks";
import { useEffect } from "react";
import { startBootinit } from "./redux";
import { Loading } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useRootState((state) => state.appState.isLoading);

  useEffect(() => {
    dispatch(startBootinit());
  }, [dispatch]);

  return (
    isLoading ? <Loading /> : (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
  );
}
