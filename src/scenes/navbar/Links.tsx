import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectPage: (value: SelectedPage) => void;
}

const Links = ({page, selectedPage, setSelectPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-rose-400" : ""} transistion duration-500 hover:text-orange-100 text-red-500`} href={`#${lowerCasePage}`} onClick={() => setSelectPage}>
        {page}
    </AnchorLink>
  )
}

export default Links