import { HeaderLinkT } from "@/app/consts/consts";
import Link from "../Link/Link";
import styles from "./HeaderLinksList.module.css";
interface HeaderLinksListProps {
  array: HeaderLinkT[];
}

const HeaderLinksList = ({ array }: HeaderLinksListProps) => {
  return (
    <ul className={styles.zero}>
      {array.map((item) => {
        return <Link key={item.id} linkName={item.linkName} />;
      })}
    </ul>
  );
};
export default HeaderLinksList;
