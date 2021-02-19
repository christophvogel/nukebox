import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.playing}>
      <button className={styles.back} onClick={() => history.back()}>
        <img src="/back-icon.svg"></img>
      </button>
      <p className={styles.now}>Now Playing</p>
    </div>
  );
}
