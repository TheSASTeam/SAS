import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { CardDataContext } from "../../Context/CardContext";
import "./style.css";

const AddDetails = () => {
 const { data,closePopup ,setClosePopup} = useContext(CardDataContext);
 const [showError,setShowError]=useState(false)
 let movieData={
    "id":data[data?.length-1]?.id+1,
    "Poster":"https://media.istockphoto.com/vectors/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-vector-id1273109788?k=20&m=1273109788&s=612x612&w=0&h=JStiZA3z_OG2FmCz5ZlV4axsxGWIy6-LrdOVTuZsyKg="

    }

    console.log(movieData.Title);

const addDetails=(e)=>{
if(e.target.name=="title"){
  movieData.Title=e.target.value;
}else if(e.target.name=="gener"){
  movieData.gener=e.target.value

}else if(e.target.name=="year"){
  movieData.Year=e.target.value
}else if(e.target.name=="language"){
  movieData.Language=e.target.value

}
}
const saveMovie=(e)=>{
  e.preventDefault();
  if(movieData.Title!=undefined){
    setShowError(false);
    if(movieData.Title!=null && movieData.Year!=null){
      data.push(movieData);
      setClosePopup(false);
   }
  }else{
    setShowError(true)
  }
   
}
console.log("data",data)
let Inputs=[
  {name:"Title",
placeholder:"Add Title"
},
{
  name:"language",
  placeholder:"add language"
}
]
  return (
    <div >
      <ReactModal isOpen={closePopup}>
        <div className="closeBtn" onClick={()=>setClosePopup(false)}>
          X
        </div>
        <div>
            <h1>Add Movie Details</h1>
        </div>
        <form onSubmit={saveMovie}>
        <div >
        <input className="inputClass" name="title" type="text" placeholder="Add Title" onChange={addDetails}></input>
        {/* {showError?<p >title is required</p>:null} */}
        <input required className="inputClass" name="year" type="number" placeholder="Add Year" onChange={addDetails}></input>
        <input required className="inputClass" name="gener" type="text" placeholder="Gener" onChange={addDetails}></input>
        <input required className="inputClass" name="language" type="text" placeholder="Add Language" onChange={addDetails}></input>

        </div>
        <button type="submit" className="inputClassBtn" >Save Movie</button>
        </form>
       
       {
         Inputs.map((ele)=>
        <input  className="inputClass" name="year" type="number" placeholder={ele.placeholder} onChange={addDetails}></input>
         
         )
       }



      </ReactModal>
    </div>
  );
};

export default AddDetails;
