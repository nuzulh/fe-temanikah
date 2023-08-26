import { useDispatch } from "react-redux";
import { useRootState } from "./hooks";
import { useEffect } from "react";
import { startBootinit } from "./redux";
import { Loading, Navbar } from "./components";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  ContactPage,
  DashboardPage,
  ForbiddenPage,
  HistoryPage,
  HomePage,
  NotFoundPage,
  PackagesPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  SubscriptionsPage,
  ThemesPage,
} from "./pages";

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useRootState((state) => state.appState.isLoading);

  useEffect(() => {
    dispatch(
      startBootinit(navigate)
    );
    // eslint-disable-next-line
  }, []);

  return (
    isLoading ? <Loading /> : (
      <Routes>
        <Route path="/" element={<Navbar.HomeNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="themes" element={<ThemesPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
        <Route path="/app" element={<Navbar.AppNavbar />}>
          <Route index element={<DashboardPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    )
  );
}
