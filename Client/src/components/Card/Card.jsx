import styleCard from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions.js";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      dispatch(addFav({ id, name, status, species, gender, origin, image }));
      setIsFav(true);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  let num = 0;

  return (
    <div className={styleCard.contenedorPrincipal}>
      <div className={styleCard.spinningTextWrapper}>
        <div className={styleCard.spinningText}>
          <p>
            {name.split("").map((letra, i) => {
              num = num + 8;
              return (
                <span key={i} style={{ transform: `rotate(${num}deg)` }}>
                  {letra}
                </span>
              );
            })}
          </p>
        </div>

        <img src={image} alt={name} />
        <div className={styleCard.image_overlay}>
          <div className={styleCard.image_buttons}>
            <button onClick={handleFavorite} className={styleCard.buttonFav}>
              {" "}
              {isFav ? "❤️‍🔥" : "🤍"}{" "}
            </button>
            {onClose && (
              <button
                onClick={() => onClose(id)}
                className={styleCard.buttonClose}
              >
                {" "}
                ☠️{" "}
              </button>
            )}
            <NavLink className={styleCard.NavLink} to={`/Detail/${id}`}>
              <p>Know More...</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
