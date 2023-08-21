import { useDispatch } from "react-redux";
import { useRootState } from "./hooks";
import { useEffect } from "react";
import { startBootinit } from "./redux";
import { Loading } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "./pages";
import { menuConfig } from "./configs";

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
          <Route path="/" element={<HomePage />} />
          <Route path={menuConfig.get("SIGNIN").path} element={<SignInPage />} />
          <Route path={menuConfig.get("SIGNUP").path} element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    )
  );
}
