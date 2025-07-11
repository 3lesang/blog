import { pb } from "@/lib/pocketbase";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import HomePage from ".";
import Layout from "./layout";
import NewPostPage from "./draft";
import SigninPage from "./signin";

const isAuthenticated = () => {
  return !!pb.authStore.token;
};

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return isAuthenticated() ? children : <Navigate to="/app/signin" replace />;
}

const queryClient = new QueryClient();

function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="app" element={<Outlet />}>
            <Route path="signin" element={<SigninPage />} />
            <Route element={<Layout />}>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="draft"
                element={
                  <ProtectedRoute>
                    <NewPostPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default Router;
