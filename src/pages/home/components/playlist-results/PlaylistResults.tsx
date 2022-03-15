import styles from "./PlaylistResults.module.css";

type IProps = {
  total: number | undefined;
  keyword: string | undefined;
};

const PlaylistResults = ({ total, keyword }: IProps) => {
  return (
    <div className={styles.container}>
      <p>
        <span>{total}</span> results found on <span>{keyword}</span>
      </p>
    </div>
  );
};

export default PlaylistResults;
