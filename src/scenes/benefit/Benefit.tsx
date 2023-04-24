import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectPage: (value: SelectedPage) => void;
};

const Benefit = ({ setSelectPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectPage(SelectedPage.Benefits)}>
        <div>
          <Htext>Not sure where to start?</Htext>
          <p className="my-5 text-sm font-normal text-gray-300">
            Programs offer day-to-day guidance on an interactive calendar to
            keep you on track.
          </p>
        </div>
        <div></div>
      </motion.div>
    </section>
  );
};

export default Benefit;
