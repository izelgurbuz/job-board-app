import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";
import JobList from "./pages/JobList";
import Job from "./pages/Job";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import JobForm from "./pages/JobForm";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/jobs",
    element: <JobList />,
    errorElement: <NotFoundPage />,
    children: [{ path: "/jobs/:jobId", element: <Job /> }],
  },
  {
    path: "/jobForm",
    element: <JobForm />,
    errorElement: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);

reportWebVitals();
