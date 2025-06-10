import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Thoughts } from "./Sections/Thoughts";
import { Home } from "./Pages/Home"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </BrowserRouter>
  )

};