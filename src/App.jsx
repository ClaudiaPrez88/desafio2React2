import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Favorites from "./views/Favorites";
import Home from "./views/Home";


const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <Container>
      <Row>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
      </Row>
      </Container>
    </div>
  );
};
export default App;
