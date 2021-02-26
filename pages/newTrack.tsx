import { useState } from "react";

function newTracks() {
  const [id, setID] = useState("");
  const [imgSrc, setIMG] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audio, setAudio] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`ID: ${id}, IMG: ${imgSrc}, Title: ${title}, Artist: ${artist}`);
    const data = { id, imgSrc, title, artist, audio };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:3000/api/tracks", requestOptions);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID
        <input value={id} onChange={(event) => setID(event.target.value)} />
      </label>
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
