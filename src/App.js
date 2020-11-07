import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RouterInvited from "./navigation/RouterInvited";

import { CarGlobalProvider } from "./context/contextCar/CarGlobalState";

const MainContent = () => {
  return (
    <div style={{ height: "var(--H-Main-Content)" }}>
      <RouterInvited />
    </div>
  );
};

const LaChacra = () => {
  return (
    <>
      <Navbar />
      <MainContent />
    </>
  );
};

function App() {
  return (
    <CarGlobalProvider>
      <BrowserRouter>
        <LaChacra />
      </BrowserRouter>
    </CarGlobalProvider>
  );
}

export default App;
