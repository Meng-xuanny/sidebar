import { useState } from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

const App = () => {
  return (
    <section className="container">
      <Home />
      <Modal />
      <Sidebar />
    </section>
  );
};
export default App;
