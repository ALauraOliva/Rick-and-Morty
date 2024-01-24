import Card from "../Card/Card.jsx";
import styleCards from "./Cards.module.css";
import PreLoader1 from "../PreLoader/PreLoader.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters, getAllFavorites } from "../../redux/actions.js";

export default function Cards(props) {
  const dispatch = useDispatch();
  const allCharsHome = useSelector((state) => state.allCharsHome);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allCharsHome.length === 0) {
      dispatch(getAllCharacters());
      dispatch(getAllFavorites());
    }

    if (allCharsHome.length > 0) {
      setLoading(false);
    }
  }, [dispatch, allCharsHome]);

  return (
    <>
      {loading ? (
        <PreLoader1 />
      ) : (
        <div className={styleCards.gridCards}>
          {allCharsHome.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              status={card.status}
              species={card.species}
              gender={card.gender}
              origin={card.origin.name}
              image={card.image}
              onClose={props.onClose}
            />
          ))}
        </div>
      )}
    </>
  );
}
