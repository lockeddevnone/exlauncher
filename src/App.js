import { Routes, Route } from "react-router-dom";
import Loading from "./page/loading";
import Layout from "./layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Loading />} />
          <Route path="*" element={<Loading />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;