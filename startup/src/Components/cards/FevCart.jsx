import React, { useContext } from "react";
import "./style.css";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
} from "react-icons/ai";
import { CardDataContext } from "../../Context/CardContext";
const FevCart = (props) => {
  const {
    selectedData,
    data,
  } = useContext(CardDataContext);
  const { remove } = props;
  return (
    <>
      <div className="inputClass flex">
        <p>Watch Later Movies List({selectedData.length})</p>
      </div>
      <div>
        {data.map((item) =>
          selectedData.indexOf(item.id) != -1 ? (
            <div className="addedCard">
              <div className="textMargin">
                <img src={item.Poster} alt="img" width="50" height="50"></img>
              </div>
              <div className="textMargin">{item.Title}</div>
              <div className="textMargin closeicon">
                <div
                  onClick={() => {
                    remove(item.id);
                  }}
                  className="Iconbtn"
                >
                  <AiFillCloseCircle />
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default FevCart;
