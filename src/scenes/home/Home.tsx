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
      <div>
        <div>
          <div>
            <h1 className="text-white font-bold text-9xl">WORKOUT WITH ME</h1>
            <p>
              A huge selection of health and fitness content, healthy recipes
              and transformation stories to help you get fit and stay fit!
            </p>
          </div>
          <div>
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

        <div>
          <img src={workout} alt="WorkOut" />
        </div>
      </div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <p>AS FEATURED IN</p>
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
