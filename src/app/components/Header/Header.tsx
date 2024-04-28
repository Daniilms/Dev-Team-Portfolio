import { headerLinksList, socialNetworkLinks } from "@/app/consts/consts";
import HeaderLinksList from "../HeaderLinksList/HeaderLinksList";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import SocialNetworkLinks from "../SocialNetworkLinks/SocialNetworkLinks";
const Header = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <header className={styles.beetween}>
          <Logo />
          <div className={styles.beetween}>
            <HeaderLinksList array={headerLinksList} />
            <SocialNetworkLinks array={socialNetworkLinks} />
          </div>
        </header>
      </div>
    </div>
  );
};
export default Header;
