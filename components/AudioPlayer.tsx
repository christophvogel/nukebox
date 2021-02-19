import styles from "../styles/Audioplayer.module.css";

type Props = {
  audio: string;
};

export default function Audioplayer({ audio }: Props) {
  return (
    <figure className={styles.audiofigure}>
      <figcaption></figcaption>
      <audio className={styles.audio} controls src={audio}>
        <code>audio</code> element not supported.
      </audio>
    </figure>
  );
}
