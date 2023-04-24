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
          <h1 className="basis-3/5 text-4xl font-semibold text-white">
            Not sure where to start?
          </h1>
        </div>
        <div></div>
      </motion.div>
    </section>
  );
};

export default Benefit;
