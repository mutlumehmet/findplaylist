import styles from "./SearchBar.module.css";
import { ReactComponent as SearchArrowSVG } from "assets/search-arrow.svg";
import { ReactComponent as SearchIconSVG } from "assets/transparent-search-icon.svg";

const placeholderDesktop = `Start typing genres, artists, songs`;
const placeholderMobile = `Start typing`;

const SearchBar = () => {
  return (
    <div className={styles["searchbar-container"]}>
      <label className={styles["search-box"]}>
        <SearchIconSVG className={styles["search-icon"]} />
        <input
          className={styles["search-input"]}
          type="text"
          id="search"
          placeholder="Search for repo or user"
          autoComplete="off"
          spellCheck="false"
        ></input>
      </label>
      <button className={styles["search-button"]}>
        <div className={styles["search-text"]}>Search</div>
        <SearchArrowSVG className={styles["search-arrow"]} />
      </button>
    </div>
  );
};

export default SearchBar;
