import styles from "../styles/Tracklist.module.css";

type Props = {
  title: string;
  artist: string;
};

export default function TracklistItem(props: Props) {
  return (
    <div className={styles.trackcontainer}>
      <img
        src="https://note-store.de/upload/resize_cache/iblock/baa/340_420_0/Procol-Harum-_-A-Whiter-Shade-of-Pale.jpg"
        className={styles.cover}
      ></img>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.artist}>{props.artist}</p>
    </div>
  );
}
