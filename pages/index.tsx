import Head from "next/head";
import { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import TracklistItem from "../components/TracklistItem";

import styles from "../styles/Home.module.css";
import { APITrack, getTracks } from "../utils/api";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);

  useEffect(() => {
    console.log("Homepage is mounted");
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);
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
