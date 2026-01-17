import { useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Layout } from "./component/Layout";

// صفحات صغيرة / خفيفة بدون lazy
import Home from "./component/Home/Home";
import About from "./component/About/About";

// صفحات كبيرة / ثقلها عالي مع lazy
const ProductsPage = lazy(() => import("./component/ProductsPage/ProductsPage"));
const ProductDetails = lazy(() => import("./component/ProductDetails/ProductDetails"));

function App() {
  // dark mode
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!localStorage.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Suspense fallback={<div className="p-4 text-center">Loading Products...</div>}><ProductsPage /></Suspense> },
        { path: "product/:id", element: <Suspense fallback={<div className="p-4 text-center">Loading Product Details...</div>}><ProductDetails /></Suspense> },
        { path: "about", element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
