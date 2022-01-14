import styles from "./MainHeader.module.css";

const header = `What do you want to listen?`;
const subheader = `Search for playlists created by the community in Spotify. Add to your library, discover new artists, songs.`;

const MainHeader = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles.header}>{header}</div>
      <div className={styles.subheader}>{subheader}</div>
    </div>
  );
};

export default MainHeader;
