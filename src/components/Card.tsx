import styles from "./card.module.css";
import Image from "next/image";

export default function ProductCard({
  venueName,
  imgSrc,
}: {
  venueName: string;
  imgSrc: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={imgSrc} alt="cover" fill={true} objectFit="cover" />
      </div>
      <div className={styles.cardtext}>
        {venueName}
        <div>
          A stunning bouquet hall where love blossoms and unforgettable memories
          are made
        </div>
      </div>
    </div>
  );
}
