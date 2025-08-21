import Image from "next/image";
import styles from "./topmenu.module.css";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className={styles.menucontainer}>
      <Image
        src={"/img/logo.png"}
        className={styles.logoimg}
        alt="logo"
        width={500}
        height={500}
        sizes="200vh"
      />
      <TopMenuItem title="booking" pageRef="/booking" />
    </div>
  );
}
