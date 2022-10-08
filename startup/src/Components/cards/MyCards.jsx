import React, { useState, useEffect, useContext } from "react";
import { CardDataContext } from "../../Context/CardContext";
import { CardApi } from "../../dataLayer/CardApi";
import AddDetails from "./AddDetails";
import FevCart from "./FevCart";
import "./style.css";
import TitleCard from "./TitleCard";
const MyCards = () => {
  const {
    selected,
    settoggle,
    data,
    setData,
    setBtnShowHide,
    selectedData,
    setselectedData,
    setClosePopup
  } = useContext(CardDataContext);

  const [query, setQuery] = useState("");
  useEffect(() => {
    getUser();
  }, []);

  //getUser basically we are using api call, Here we are storing data to our state.
  const getUser = async () => {
    const data = await CardApi();
    setData(data);
  };

  //remove function we are using to remove data from selected section.
  const remove = (id) => {
    data.map((item) => {
      if (id == item.id) {
        const index = selectedData.indexOf(id);
        if (index > -1) {
          setselectedData(selectedData.filter((ele) => ele !== id));
        }
      }
    });
    settoggle(selected.includes(id));
    setBtnShowHide(true);
    const index = selected.indexOf(id);
    if (index > -1) {
      selected.splice(index, 1);
    }
  };

  return (
    <div>
      <div className="cardDiv">
        <div style={{ flex: 4 }} className="border">
          <div className="cardDiv">
            <div style={{ flex: 7 }}>
              <input
                className="inputClass"
                placeholder="Search"
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <div className="center">
              <button onClick={()=>setClosePopup(true)}>Add Movie</button>
            </div>
          </div>
          <AddDetails />
          {data
            ?.filter((post) => {
              if (query === "") {
                return post;
              } else if (
                post.Title.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }else if (
                post.gener.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }else if (
                post.Language.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post, index) => (
              <TitleCard remove={remove} post={post} index={index} />
            ))}
        </div>
        <div style={{ flex: 2 }}>
          <FevCart remove={remove} />
        </div>
      </div>
    </div>
  );
};

export default MyCards;
