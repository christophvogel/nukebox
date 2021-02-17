import Head from "next/head";
import Greeting from "../components/Greeting";
import TracklistItem from "../components/Tracklist";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Greeting name="Christoph🐸" />
      <TracklistItem
        imgSrc="https://note-store.de/upload/resize_cache/iblock/baa/340_420_0/Procol-Harum-_-A-Whiter-Shade-of-Pale.jpg"
        title="A Whiter Shade of Pale"
        artist="Procol Harum"
      />
      <TracklistItem
        imgSrc="https://note-store.de/upload/resize_cache/iblock/baa/340_420_0/Procol-Harum-_-A-Whiter-Shade-of-Pale.jpg"
        title="A Whiter Shade of Pale"
        artist="Procol Harum"
      />
      <TracklistItem
        imgSrc="https://note-store.de/upload/resize_cache/iblock/baa/340_420_0/Procol-Harum-_-A-Whiter-Shade-of-Pale.jpg"
        title="A Whiter Shade of Pale"
        artist="Procol Harum"
      />
    </div>
  );
}
