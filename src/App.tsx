import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/Home";
import Benefit from "./scenes/benefit/Benefit";
import Ourclasses from "./scenes/ourClasses/Ourclasses";

function App() {
  const [selectedPage, setSelectPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-[#1e1e1e]">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectPage={setSelectPage}
      />
      <Home setSelectPage={setSelectPage} />
      <Benefit setSelectPage={setSelectPage} />
      <Ourclasses setSelectPage={setSelectPage} />
    </div>
  );
}

export default App;
