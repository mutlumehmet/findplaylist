import styles from "./SearchBar.module.css";
import { ReactComponent as SearchArrowSVG } from "assets/search-arrow.svg";
import { ReactComponent as SearchIconSVG } from "assets/transparent-search-icon.svg";

const placeholderText = `Start typing genres, artists, songs`;

const SearchBar = () => {
  return (
    <div className={styles["searchbar-container"]}>
      <label className={styles["search-box"]}>
        <div>
          <SearchIconSVG className={styles["search-icon"]} />
        </div>
        <input
          className={styles["search-input"]}
          type="text"
          id="search"
          placeholder={placeholderText}
          autoComplete="off"
          spellCheck="false"
        ></input>
      </label>
      <button className={styles["search-button"]}>
        <div className={styles["search-button-text"]}>Search</div>
        <SearchArrowSVG className={styles["search-arrow"]} />
      </button>
    </div>
  );
};

export default SearchBar;
