import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectPage: (value: string) => void;
}

const Links = ({page, selectedPage, setSelectPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-rose-400" : ""} transistion duration-500 hover:text-orange-100`} href={`#${lowerCasePage}`} onClick={() => setSelectPage}>
        {page}
    </AnchorLink>
  )
}

export default Links