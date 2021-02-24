import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { APITrack, getTrack } from "../../utils/api";
import TrackDetails from "../../components/TrackDetails";
import Audioplayer from "../../components/AudioPlayer";
import Nav from "../../components/Nav";
import styles from "../../styles/Favbutton.module.css";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState<APITrack>(null);
  const [favorite, setFavorite] = useState(null);
  const [storedValue, setValue] = useLocalStorage("favoriteSong", "");

  useEffect(() => {
    if (typeof id !== "string" || favorite === null) {
      return;
    }
    if (favorite) {
      setValue(id);
    }
    if (!favorite) {
      setValue("");
    }
  }, [favorite]);
  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => setTrack(newTrack));
    setFavorite(id === storedValue);
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
