import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const error = {
    code: 404,
    message: "Page not found",
  };
  return (
    <BrowserRouter>
      <div className="max-w[1400px] m-auto w-full">
        <Routes>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
