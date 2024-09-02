import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { About } from "./About";
import Alert from "./Alert";
export const MainContent = () => {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate to="/home"/>} />
      </Routes>
      <Alert />
    </main>
  );
}
