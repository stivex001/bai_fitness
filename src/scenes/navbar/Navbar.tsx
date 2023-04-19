import React, { useState } from "react";
import Links from "./Links";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import ActionButton from "@/shared/ActionButton";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  selectedPage: SelectedPage;
  setSelectPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState<Boolean>(false);

  return (
    <nav>
      <div
        className={`${flexBetween} py-6 fixed top-0 z-30 w-full bg-[#1e1e1e] `}
      >
        <div className={`${flexBetween} w-5/6 mx-auto text-white  gap-16`}>
          {/* Logo */}
          <div className="  text-orange-500">
            <p>WORKOUT</p>
          </div>
          {/* Right */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} gap-16`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Links
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectPage={setSelectPage}
                />
                <Links
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectPage={setSelectPage}
                />
                <Links
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectPage={setSelectPage}
                />
                <Links
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectPage={setSelectPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectPage}>
                  Become a Member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full p-2 bg-orange-500"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <MenuIcon />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU MOBILE */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-60 bg-red-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <CloseIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className={` w-full ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Links
              page="Home"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage}
            />
            <Links
              page="Benefits"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage}
            />
            <Links
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage}
            />
            <Links
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
