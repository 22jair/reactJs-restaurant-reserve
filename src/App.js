import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RouterInvited from "./navigation/RouterInvited";

import { CartGlobalProvider } from "./context/contextCart/CartGlobalState";
import { UserGlobalProvider } from "./context/contextUser/UserGlobalState";

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
    <UserGlobalProvider>
      <CartGlobalProvider>
        <BrowserRouter>
          <LaChacra />
        </BrowserRouter>
      </CartGlobalProvider>
    </UserGlobalProvider>
  );
}

export default App;
