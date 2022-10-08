import React, { useContext } from "react";
import "./style.css";
import {
  AiFillPlusCircle,
  AiFillCheckCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { CardDataContext } from "../../Context/CardContext";
const TitleCard = (props) => {
    // Basically i am using context api for state management. over all the mini project.
  const {
    selected,
    btnShowHide,
    selectedData,
    settoggle,
    data,
    setBtnShowHide,
    setselectedData,
  } = useContext(CardDataContext);

  // BtnShowHide am using for changing of button. Adding data to required section.
  const BtnShowHide = (id) => {
    data.map((item) => {
      if (id == item.id) {
        setselectedData((selectedData) => [...selectedData, item.id]);
      }
    });
    setBtnShowHide(false);
    selected.push(id);
    settoggle(selected.includes(id));
  };

  const { post, index, remove } = props;
console.log("post",post)
  return (
    <div className="box" key={index}>
      <p className="category1">{post.category}</p>
      {/* <p>{post.description}</p> */}
      <div>
        <div className="cardDiv">
          <div style={{ flex: "2" }}>
            {" "}
            <img src={post.Poster} alt="not Available" width="200" height="200"></img>
          </div>
          <div style={{ flex: "4" }}>
            <div>
              <p>
                <span className="bold">Title: </span>
                {post.Title}
              </p>
            </div>
            <div>
              <p>
                <span className="bold"> Gener: </span>
                {post.gener}
              </p>
            </div>
            <div>
              <p>
                <span className="bold"> Language:</span>
                {post.Language}
              </p>
            </div>
            <div>
              <p>
                <span className="bold">Year: </span>
                {post.Year}
              </p>
            </div>
          </div>
          <div style={{ flex: "1" }}>
            <div>
              {btnShowHide && selectedData.indexOf(post.id) === -1 ? (
                <button
                  onClick={() => {
                    BtnShowHide(post.id);
                  }}
                >
                  <div className="subsection">
                    <AiFillPlusCircle />
                  </div>
                  <div className="subsectionint">Watch later</div>
                </button>
              ) : selectedData.indexOf(post.id) != -1 && post.id ? (
                <>
                  <div style={{ display: "flex" }}>
                    <div
                      onClick={() => {
                        remove(post.id);
                      }}
                      className="Iconbtn"
                    >
                      <AiFillCloseCircle />
                    </div>
                    <button>
                      <div>
                        <AiFillCheckCircle />
                      </div>
                      <div className="subsectionint mrg">ADDED</div>
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => {
                    BtnShowHide(post.id);
                  }}
                >
                  <div className="subsection">
                    <AiFillPlusCircle />
                  </div>
                  <div className="subsectionint">Watch later</div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
