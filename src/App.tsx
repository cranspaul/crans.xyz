import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import DevinPage from "./pages/DevinPage";
import TracksPage from "./pages/TracksPage";
import Hot16Page from "./pages/Hot16Page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/r00t" element={<RootPage />} />
      <Route path="/devin" element={<DevinPage />} />
      <Route path="/tracks" element={<TracksPage />} />
      <Route path="/tracks/hot16challenge" element={<Hot16Page />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

