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
  const { id: idQuery } = router.query;
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];
  const [track, setTrack] = useState<APITrack>(null);
  const [favoriteSongs, setFavoriteSongs] = useLocalStorage<string[]>(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSongs.includes(id);

  useEffect(() => {
    getTrack(id).then((newTrack) => setTrack(newTrack));
  }, [id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSongs = favoriteSongs.filter(
        (favoriteSong) => favoriteSong !== id
      );
      setFavoriteSongs(newFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, id]);
    }
  };

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
        <button className={styles.favbtn} onClick={handleFavoriteClick}>
          {favorite ? "❤️" : "🖤"}
        </button>
      </main>
      <footer>
        <Audioplayer src={track.audio} />
      </footer>
    </div>
  );
}
