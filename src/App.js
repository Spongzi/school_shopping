import { RouterProvider } from "react-router";
import router from "@/router";

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">根组件</div>
    </RouterProvider>
  );
}

export default App;
