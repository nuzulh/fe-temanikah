import { useDispatch } from "react-redux";
import { AuthPageGuard, PageGuard, useRootState } from "./hooks";
import { useEffect } from "react";
import { startBootinit } from "./redux";
import { Loading, Navbar } from "./components";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
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
import { menuConfig } from "./configs";

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
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Navbar.HomeNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="themes" element={<ThemesPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/auth">
          <Route index element={<Navigate to={menuConfig.get("SIGNIN").path} />} />
          <Route path="signin" element={<AuthPageGuard element={<SignInPage />} />} />
          <Route path="signup" element={<AuthPageGuard element={<SignUpPage />} />} />
        </Route>
        {/* PRIVATE ROUTES */}
        <Route path="/app" element={<PageGuard element={<Navbar.AppNavbar />} />}>
          <Route index element={<DashboardPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        {/* ERROR ROUTES */}
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    )
  );
}
