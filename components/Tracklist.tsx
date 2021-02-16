import styles from "../styles/Tracklist.module.css";

type Props = {
  title: string;
  artist: string;
  imgSrc: string;
};

export default function TracklistItem(props: Props) {
  return (
    <div className={styles.trackcontainer}>
      <img src={props.imgSrc} className={styles.cover}></img>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.artist}>{props.artist}</p>
    </div>
  );
}
