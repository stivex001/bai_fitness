import { SelectedPage, classType } from "@/shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

const classes: Array<classType> = [
  {
    name: "Weight Training Classes",
    desc: "These classes are designed to be suitable for people of all fitness levels and typically involve a combination of exercises such as squats, lunges, deadlifts, and bench presses. Instructors provide guidance on proper form and technique to ensure participants are performing exercises safely and effectively. Weight training classes can help individuals achieve their fitness goals, improve overall health, and boost confidence.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    desc: "These classes are designed to be suitable for people of all fitness levels and typically involve a combination of exercises such as squats, lunges, deadlifts, and bench presses. Instructors provide guidance on proper form and technique to ensure participants are performing exercises safely and effectively. Weight training classes can help individuals achieve their fitness goals, improve overall health, and boost confidence.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    desc: "These classes are designed to be suitable for people of all fitness levels and typically involve a combination of exercises such as squats, lunges, deadlifts, and bench presses. Instructors provide guidance on proper form and technique to ensure participants are performing exercises safely and effectively. Weight training classes can help individuals achieve their fitness goals, improve overall health, and boost confidence.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    desc: "These classes are designed to be suitable for people of all fitness levels and typically involve a combination of exercises such as squats, lunges, deadlifts, and bench presses. Instructors provide guidance on proper form and technique to ensure participants are performing exercises safely and effectively. Weight training classes can help individuals achieve their fitness goals, improve overall health, and boost confidence.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    desc: "These classes are designed to be suitable for people of all fitness levels and typically involve a combination of exercises such as squats, lunges, deadlifts, and bench presses. Instructors provide guidance on proper form and technique to ensure participants are performing exercises safely and effectively. Weight training classes can help individuals achieve their fitness goals, improve overall health, and boost confidence.",
    image: image5,
  },
  {
    name: "Training Classes",
    desc: "These classes are designed to be suitable for people of all fitness levels and typically involve a combination of exercises such as squats, lunges, deadlifts, and bench presses. Instructors provide guidance on proper form and technique to ensure participants are performing exercises safely and effectively. Weight training classes can help individuals achieve their fitness goals, improve overall health, and boost confidence.",
    image: image6,
  },
];

type Props = {
  setSelectPage: (value: SelectedPage) => void;
};

const Ourclasses = ({ setSelectPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full py-40 ">
      <motion.div
        onViewportEnter={() => setSelectPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5 text-sm font-normal text-gray-400">
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym. With hundreds of
              professional workouts, healthy recipes and informative articles,
              as well as one of the most positive communities on the web, you’ll
              have everything you need to reach your personal fitness goals –
              for free!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 w-full h-[335px] overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Ourclasses;
