import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import './index.css'
import store from "./app/store";
import router from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkAuth } from "./features/authSlice";

function AuthBootstrap() {
  const dispatch = store.dispatch;

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthBootstrap />
  </Provider>
);