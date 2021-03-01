import { useRouter } from "next/router";
import { useState } from "react";
import { addTrack } from "../utils/api";
import styles from "../styles/newTrack.module.css";

function newTracks() {
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
    if (addMore) {
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
        <img src="/back-icon.svg"></img>
        <div>BACK</div>
      </button>
      <label>
        <div>Img Source:</div>
        <input
          required
          value={imgSrc}
          onChange={(event) => setIMG(event.target.value)}
        />
      </label>
      <label>
        <div>Title:</div>
        <input
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        <div>Artist:</div>
        <input
          required
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
      </label>
      <label>
        <div>Audio:</div>
        <input
          required
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
