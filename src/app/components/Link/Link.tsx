import styles from "./Link.module.css";

interface HeaderLinkProps {
  linkName: string;
}
const Link = ({ linkName }: HeaderLinkProps) => {
  return (
    <a className={styles.links}>
      <span className={styles.color}>{linkName}</span>
    </a>
  );
};
export default Link;
