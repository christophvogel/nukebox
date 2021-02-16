import Head from "next/head";
import Greeting from "../components/Greeting";
import TracklistItem from "../components/Tracklist";
import Tracklist from "../components/Tracklist";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Greeting name="Christoph🐸" />
      <TracklistItem title="A Whiter Shade of Pale" artist="Procol Harum" />
    </div>
  );
}
