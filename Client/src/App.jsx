import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import axios from "axios";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import { Helmet } from "react-helmet";
import { searchById, removeCharHome } from "./redux/actions.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  useEffect(() => {
    console.log("useEffect triggered with access:", access);
    !access && navigate("/");
  }, [access, navigate]);

  const login = async (userData) => {
    try {
      const { data } = await axios.post(
        "https://rickandmorty-server-pq7r.onrender.com/logIn",
        userData
      );
      setAccess(data.access);
    } catch (error) {
      alert(`Error: ${error.response.data}`);
      throw error;
    }
  };

  const onSearch = (id) => {
    dispatch(searchById(id));
  };

  const onClose = (id) => {
    dispatch(removeCharHome(id));
  };

  return (
    <div id="AppContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rick and Morty</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div id="stars">
        <div id="stars2">
          <div id="stars3" />
        </div>
      </div>

      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} setAccess={setAccess} />
      )}

      <Routes>
        <Route path={"/"} element={<Form login={login} access={access} />} />
        <Route path={"/Home"} element={<Cards onClose={onClose} />} />
        <Route path={"/About"} element={<About />} />
        <Route path={"/Detail/:id"} element={<Detail />} />
        <Route path={"/favorites"} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
