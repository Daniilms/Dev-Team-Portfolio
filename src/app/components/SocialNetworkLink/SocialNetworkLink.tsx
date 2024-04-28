import { socialNetworkLinksT } from "@/app/consts/consts";
import styles from "./SocialNetworkLink.module.css";
interface SocialNetworkLinkProps {
  item: socialNetworkLinksT;
}

const SocialNetworkLink = ({ item }: SocialNetworkLinkProps) => {
  return <a className={styles.color}>{item.url}</a>;
};
export default SocialNetworkLink;
