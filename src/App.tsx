import { useDispatch } from "react-redux";
import { useRootState } from "./hooks";
import { useEffect } from "react";
import { startBootinit } from "./redux";
import { Loading, ScreenContainer, Text } from "./components";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  ContactPage,
  Dashboard,
  HomePage,
  PackagesPage,
  SignInPage,
  SignUpPage,
  ThemesPage,
} from "./pages";
import { HomeNavbar } from "./components/navbar/home-navbar.component";
import { AppNavbar } from "./components/navbar/app-navbar.component";

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useRootState((state) => state.appState.isLoading);

  useEffect(() => {
    dispatch(
      startBootinit(navigate)
    );
  }, [dispatch, navigate]);

  return (
    isLoading ? <Loading /> : (
      <Routes>
        <Route path="/" element={<HomeNavbar />}>
          <Route path="" element={<HomePage />} />
          <Route path="/themes" element={<ThemesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route path="/app" element={<AppNavbar />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route
          path="*"
          element={
            <ScreenContainer>
              <Text>Halaman tidak ditemukan</Text>
            </ScreenContainer>
          }
        />
      </Routes>
    )
  );
}
