import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../components/pages/LandingPage.view";
import About from "../../components/pages/About.view";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <LandingPage />
    ),
  },
  {
    path: "about",
    element: (
      <About />
    )
  },
]);
