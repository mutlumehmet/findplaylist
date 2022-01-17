import { ReactComponent as CoffeeSVG } from "assets/coffee.svg";
import {
  githubLink,
  discordLink,
  serkanPersonalLink,
  mehmetPersonalLink,
  spotifyApiUrl,
  buyMeACoffeeUrl,
} from "constants/urls";
import styles from "./Footer.module.css";

const FooterMain = () => {
  return (
    <div className={styles.footer}>
      <a href={buyMeACoffeeUrl} className={styles["cta-coffee"]}>
        <CoffeeSVG className={styles["cta-coffee-icon"]} />
        <div className={styles["cta-coffee-text"]}>buy me a coffee</div>
      </a>
      <div className={styles["right-pane"]}>
        <div className={styles.links}>
          <a href={githubLink} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={discordLink} target="_blank" rel="noreferrer">
            Discord
          </a>
        </div>
        <div>
          <span>{`created by `}</span>
          <a href={serkanPersonalLink} target="_blank" rel="noreferrer">
            Serkan Mercan
          </a>
          {` & `}
          <a href={mehmetPersonalLink} target="_blank" rel="noreferrer">
            Mehmet Mutlu
          </a>
        </div>
        <div className={styles.statement}>
          <span>{`Powered by `}</span>
          <a href={spotifyApiUrl}>Spotify API</a>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
