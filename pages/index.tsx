import Head from "next/head";
import { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import TracklistItem from "../components/TracklistItem";

import styles from "../styles/Home.module.css";
import { APITrack, getTracks } from "../utils/api";
import Link from "next/link";
import ViewsCount from "../components/ViewsCount";
import { useRouter } from "next/router";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);

  useEffect(() => {
    console.log("Homepage is mounted");
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);
  const trackItems = tracks.map((track) => (
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <TracklistItem
          imgSrc={track.imgSrc}
          artist={track.artist}
          title={track.title}
        />
      </a>
    </Link>
  ));
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/frog.png" />
      </Head>
      <ViewsCount />
      <Greeting name="Christoph🐸" />
      <div>{trackItems}</div>
      <button onClick={() => router.push("/newTrack")}>NEW</button>
    </div>
  );
}
