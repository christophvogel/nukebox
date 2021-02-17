import Head from "next/head";
import Greeting from "../components/Greeting";
import TracklistItem from "../components/TracklistItem";

import styles from "../styles/Home.module.css";

export default function Home() {
  const tracks = [
    {
      imgSrc:
        "https://note-store.de/upload/resize_cache/iblock/baa/340_420_0/Procol-Harum-_-A-Whiter-Shade-of-Pale.jpg",
      title: "A Whiter Shade of Pale",
      artist: "Procol Harum",
    },
    {
      imgSrc:
        "https://img.discogs.com/MW6n8H8M4Hyu3EFVfKG5Eu9sRng=/fit-in/599x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-918683-1174128663.jpeg.jpg",
      title: "Last Nite",
      artist: "The Strokes",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/The_Black_Keys_-_Tighten_Up.jpg/220px-The_Black_Keys_-_Tighten_Up.jpg",
      title: "Tighten Up",
      artist: "The Black Keys",
    },
  ];
  const trackItems = tracks.map((track) => (
    <TracklistItem
      key={`${track.artist}-${track.title}`}
      imgSrc={track.imgSrc}
      artist={track.artist}
      title={track.title}
    />
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/frog.png" />
      </Head>

      <Greeting name="Christoph🐸" />
      <div>{trackItems}</div>
    </div>
  );
}
