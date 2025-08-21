import Banner from "@/components/Banner";
import styles from "./page.module.css";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.cardList}>
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
        <Card venueName=" The Grand Table" imgSrc="/img/grandtable.jpg " />
      </div>
    </main>
  );
}
