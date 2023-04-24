import { SelectedPage } from "@/shared/types";
import workout from "../../assets/workout.png";
import nike from "../../assets/Vector.png";
import buzz from "../../assets/Group 29.png";
import sprit from "../../assets/ESPRIT.png";
import huff from "../../assets/layer1.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="md:flex items-center justify-center mx-auto w-5/6 md:h-5/6">
        <div className="z-10 mt-36 basis-3/5">
          <div className="-mt-20">
            <h1 className="text-white font-bold text-7xl">WORKOUT WITH ME</h1>
            <p className="text-sm font-normal text-gray-400 ">
              A huge selection of health and fitness content, healthy recipes
              and transformation stories to help you get fit and stay fit!
            </p>
          </div>
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-red-500 underline hover:text-yellow-500"
              onClick={() => setSelectPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        <div className="flex basis-3/5 justify-center mt-20 md:ml-10 md:justify-items-end ">
          <img src={workout} alt="WorkOut" />
        </div>
      </div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full py-10">
          <div>
            <p className="text-sm font-semibold text-gray-300">AS FEATURED IN</p>
            <div>
              <img src={nike} alt="nike" />
              <img src={buzz} alt="buzz" />
              <img src={sprit} alt="sprit" />
              <img src={huff} alt="huff" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
