import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  title: string;
  desc: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefitts = ({ title, desc, setSelectedPage }: Props) => {
  return (
    <div className="mt-5 rounded-md border-2 border-[#4F5261] px-5 py-16 text-center bg-[#4F5261]">
      <div className="mb-4 flex justify-center"></div>
      <h4 className="font-semi-bold text-xl text-white">{title}</h4>
      <p className="my-3 font-normal text-sm text-gray-400">{desc}</p>
      <AnchorLink
        className="text-sm font-bold text-red-500 underline hover:text-yellow-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  );
};

export default Benefitts;
