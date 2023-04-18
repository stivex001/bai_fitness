import { useState } from "react";
import Navbar from "./scenes/navbar/Navbar";

function App() {
  const [selectedPage, setSelectPage] = useState('Home')

  return <div className=" bg-[#1e1e1e]">
    <Navbar selectedPage={selectedPage} setSelectPage={setSelectPage} />
  </div>;
}

export default App;
