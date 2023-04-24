import React from "react";

type Props = {
  children: React.ReactNode;
};

const Htext = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 text-4xl font-semibold text-white">{children}</h1>
  );
};

export default Htext;
