import { capabilitiesCardListT } from "@/app/consts/consts";
import styles from "./СapabilitiesCard.module.css";
import Image from "next/image";

interface СapabilitiesCardProps {
  card: capabilitiesCardListT;
}
const СapabilitiesCard = ({ card }: СapabilitiesCardProps) => {
  return (
    <li
      className={`${styles.capabilitiesCard} ${styles.capabilitiesCardEffect}`}
      style={{ backgroundImage: `url(${card.capabilitiesCardImageSrc})` }}
    >
      <div className={`${styles.capabilitiesCardContent}`}>
        <Image
          className={styles.capabilitiesCardImage}
          src={`${card.capabilitiesCardSvgSrc}`}
          width={30}
          height={30}
          alt={card.capabilitiesCardSvgAlt}
        />
        <h3 className={styles.capabilitiesCardText}>
          {card.capabilitiesCardText}
        </h3>
      </div>
    </li>
  );
};

export default СapabilitiesCard;
