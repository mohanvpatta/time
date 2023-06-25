import { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Frame from "./components/modals/Frame";

function App() {
  return (
    <>
      <div className="w-[440px]">
        <Header />
        <Body />
        <Footer />
        {/* <Frame /> */}
      </div>
    </>
  );
}

export default App;
