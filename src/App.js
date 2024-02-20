import "./App.css";
import Homepage from "./Homepage";
import ProjetDetail from "./projetDetail/ProjetDetail";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Homepage />
      </div>
    ),
  },

  {
    path: "/projets/:projetId",
    element: (
      <div>
        <ProjetDetail />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
