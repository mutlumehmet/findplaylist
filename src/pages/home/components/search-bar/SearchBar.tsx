import styles from "./SearchBar.module.css";
import { ReactComponent as SearchArrowSVG } from "assets/search-arrow.svg";
import { ReactComponent as SearchIconSVG } from "assets/transparent-search-icon.svg";

const placeholderText = `Start typing genres, artists, songs`;

const SearchBar = () => {
  return (
    <form className={styles["searchbar-container"]}>
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
      <button
        type="submit"
        className={`${styles["search-button"]} hvrc-sweep-to-right hvr-icon-wobble-horizontal`}
      >
        <div className={styles["search-button-text"]}>Search</div>
        <SearchArrowSVG className={`${styles["search-arrow"]} hvr-icon`} />
      </button>
    </form>
  );
};

export default SearchBar;
