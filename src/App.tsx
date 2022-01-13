import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Grid>
        <Row>
          <Col className={styles.app} xl={3}>
            Find Playlist
          </Col>
          <Col xl={3}>Find Playlist</Col>
          <Col xl={3}>Find Playlist</Col>
          <Col xl={3}>Find Playlist</Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
