import styles from "./PlaylistResults.module.css";
const PlaylistResults = () => {
  const results = {
    count: 1245,
    text: `results found on`,
    keywords: `Progressive Russian Rock`,
  };

  return (
    <div className={styles.container}>
      <p>
        {results.count} {results.text} <span>{results.keywords}</span>
      </p>
    </div>
  );
};

export default PlaylistResults;
