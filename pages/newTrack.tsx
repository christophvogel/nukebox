import { useRouter } from "next/router";
import { useState } from "react";
import { addTrack } from "../utils/api";
import styles from "../styles/newTrack.module.css";

function newTracks() {
  //   const [id, setID] = useState("");
  const [imgSrc, setIMG] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audio, setAudio] = useState("");

  const id = `${artist}_${title}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { id, imgSrc, title, artist, audio };
    await addTrack(data);

    const addMore = confirm("Do you want to add more tracks?");
    if (addMore === true) {
      setIMG("");
      setTitle("");
      setArtist("");
      setAudio("");
    } else {
      router.push("/");
    }
  };
  const router = useRouter();

  return (
    <form className={styles.addform} onSubmit={handleSubmit}>
      <button className={styles.backbtn} onClick={() => router.push("/")}>
        <img src="/back-icon.svg"></img> BACK
      </button>
      <label>
        Img Source:
        <input
          value={imgSrc}
          onChange={(event) => setIMG(event.target.value)}
        />
      </label>
      <label>
        Title:
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Artist:
        <input
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
      </label>
      <label>
        Audio:
        <input
          value={audio}
          onChange={(event) => setAudio(event.target.value)}
        />
      </label>
      <button className={styles.add} type="submit">
        ADD
      </button>
    </form>
  );
}

export default newTracks;
