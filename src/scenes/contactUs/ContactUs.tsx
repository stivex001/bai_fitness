import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import image5 from "../../assets/image5.png";
import Htext from "@/shared/Htext";

type Props = {
  setSelectPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectPage }: Props) => {
  const inputStyles = `mt-5 w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-10">
      <motion.div onViewportEnter={() => setSelectPage(SelectedPage.ContactUs)}>
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>
            <span className="text-red-500">JOIN NOW</span> TO GET IN SHAPE
          </Htext>
          <p className="my-5 font-normal text-gray-400">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </p>
        </motion.div>
        {/* FORM  AND IMAGE */}

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="__blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/f9dfb9a1ac781037d53979a086961fed "
              method="POST"
            >
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-500">
                  {errors.name.type === "required" &&
                    "Name field cannot be empty"}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 100 character"}
                </p>
              )}

              <input
                type="text"
                className={inputStyles}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-500">
                  {errors.email.type === "required" &&
                    "email field cannot be empty"}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                className={inputStyles}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-red-500">
                  {errors.message.type === "required" &&
                    "Name fiels cannot be empty"}
                  {errors.message.type === "maxLength" &&
                    "Max Length is 2000 character"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-yellow-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <img className="w-full rounded-lg" src={image5} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
