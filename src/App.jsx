import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DiaryPage from "./pages/DiaryPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <DiaryPage /> },
      { path: "favorites", element: <FavoritesPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
