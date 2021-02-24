import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";

import TrackDetails from "../../components/TrackDetails";
import Audioplayer from "../../components/AudioPlayer";
import Nav from "../../components/Nav";
import styles from "../../styles/Favbutton.module.css";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    if (favorite) {
      localStorage.setItem("favoriteSong", id);
    }
    if (!favorite) {
      localStorage.removeItem("favoriteSong");
    }
  }, [favorite]);
  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => setTrack(newTrack));
    setFavorite(id === localStorage.getItem("favoriteSong"));
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav />
      <main>
        <TrackDetails
          imgSrc={track.imgSrc}
          title={track.title}
          artist={track.artist}
        />
        <button
          className={styles.favbtn}
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? "❤️" : "🖤"}
        </button>
      </main>
      <footer>
        <Audioplayer src={track.audio} />
      </footer>
    </div>
  );
}
