import React from "react";
import Htext from "./Htext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
import { motion } from "framer-motion";

type Props = {
  setSelectPage: (value: SelectedPage) => void;
  title: string;
  desc: string;
  src: string;
  index: number;
};

const Card = ({ setSelectPage, title, desc, src, index }: Props) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`lg:flex items-center gap-8 ${
        isEven ? "" : "flex-row-reverse"
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="basis-3/5 mb-8"
      >
        <Htext>{title}</Htext>
        <p className="my-5 text-sm font-normal text-gray-300">{desc}</p>
        <AnchorLink
          className="text-sm font-bold text-red-500 underline hover:text-yellow-500"
          onClick={() => setSelectPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <img src={src} alt="" />
      </motion.div>
    </div>
  );
};

export default Card;
