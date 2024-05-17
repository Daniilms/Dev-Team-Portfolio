import { capabilitiesCardList } from "@/app/consts/consts";
import СapabilitiesCard from "@/app/components/СapabilitiesCard/СapabilitiesCard";
import styles from "./СapabilitiesCardList.module.css";
const СapabilitiesCardList = () => {
  return (
    <ul className={styles.capabilitiesCardList}>
      {capabilitiesCardList.map((card) => {
        return <СapabilitiesCard key={card.id} card={card} />;
      })}
    </ul>
  );
};

export default СapabilitiesCardList;
