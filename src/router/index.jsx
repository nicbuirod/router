import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RickAndMorty, Pokemon, RAMDetails, RAMDetailspokemon } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },

  {
    path: "/rickandmorty",
    element: <RickAndMorty />,
  },
  {
    path: "/rickandmorty/:id",
    element: <RAMDetails />,
  },
  {
    path: "/pokemon/:id",
    element: <RAMDetailspokemon />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
