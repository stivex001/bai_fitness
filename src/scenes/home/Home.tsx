import { SelectedPage } from "@/shared/types";
import React from "react";

type Props = {
  setSelectPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectPage }: Props) => {
  return <div>Home</div>;
};

export default Home;
