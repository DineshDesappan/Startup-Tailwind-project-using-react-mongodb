import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/navbar";
import VideoPlayer from "./components/Videoplayer";
import Form from "./components/Form";
import Section from "./components/Grid.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <VideoPlayer />
    <Section />

    <App />
  </StrictMode>
);
