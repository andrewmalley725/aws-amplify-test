import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GameContainer from "./components/gameContainer";

const router = createBrowserRouter([
  {
      path: "/",
      element: <GameContainer/>,
  },
  {
      path: "/test",
      element: <h1>it worked</h1>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
