import { useRouter } from "next/router";
import { useState } from "react";
import { addTrack } from "../utils/api";

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
  };
  const router = useRouter();
  return (
    <form onSubmit={handleSubmit}>
      <button onClick={() => router.push("/")}>BACK</button>
      <label>
        imgSrc
        <input
          value={imgSrc}
          onChange={(event) => setIMG(event.target.value)}
        />
      </label>
      <label>
        Title
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Artist
        <input
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
      </label>
      <label>
        Audio
        <input
          value={audio}
          onChange={(event) => setAudio(event.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default newTracks;
