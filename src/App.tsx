import { BrowserRouter, Routes, Route } from "react-router-dom";

import ErrorPage from "@pages/ErrorPage";
import Homepage from "@pages/HomePage";
import MoviePage from "@pages/MoviePage";
import SearchPage from "@pages/SearchPage";

function App() {
  const error = {
    code: 404,
    message: "Page not found",
  };
  return (
    <BrowserRouter>
      <div className="max-w-[1480px] m-auto w-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/search/:term" element={<SearchPage />} />
          <Route path="*" element={<ErrorPage error={error} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
