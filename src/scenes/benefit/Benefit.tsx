import Benefitts from "@/shared/Benefitts";
import Htext from "@/shared/Htext";
import { Benefits, SelectedPage } from "@/shared/types";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

type Props = {
  setSelectPage: (value: SelectedPage) => void;
};

const benefits: Array<Benefits> = [
  {
    icon: <ArrowRight className="h-6 w-6 text-white" />,
    title: "Workout Videos",
    desc: "Access to hundreds of free, full-length workout videos.",
  },
  {
    icon: <ArrowRight className="h-6 w-6 text-white" />,
    title: "Workout Programs",
    desc: "Affordable and effective workout programs. ",
  },
  {
    icon: <ArrowRight className="h-6 w-6 text-white" />,
    title: "Meal Plans",
    desc: "Plans built with registered dietitians and nutritionists. ",
  },
  {
    icon: <ArrowRight className="h-6 w-6 text-white" />,
    title: "WO Plus ALL ACCESS",
    desc: "Add powerful features to your membership. ",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefit = ({ setSelectPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 my-10">
      <motion.div onViewportEnter={() => setSelectPage(SelectedPage.Benefits)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{  duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>Not sure where to start?</Htext>
          <p className="my-5 text-sm font-normal text-gray-300">
            Programs offer day-to-day guidance on an interactive calendar to
            keep you on track.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="lg:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefitts
              key={benefit.title}
              title={benefit.title}
              desc={benefit.desc}
              setSelectedPage={setSelectPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefit;
