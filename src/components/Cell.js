import React from "react";


export default function Cell({ details, updateFlag, revealCell }) {
 
  const box = {
     background: details.revealed
        ? details.value === "X"
        : chexPattern(details.x, details.y),
    
  };

  return (

    <div  className="box" 
    style={box}
    onContextMenu={(e) => 
    updateFlag(e, details.x, details.y)} 
    onClick={() =>  revealCell(details.x, details.y)}>
      {/*details.revealed ? details.value : ""*/}
      {details.flagged && !details.revealed ? (
        "🚩"
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          "💣"
        ) : (
         details.value 
        ) 
      ) : (
        ""
      )}

    </div>
    
  )
}

const chexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#393a3c";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#393a3c";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#393a3c";
  } else {
    return "#393a3c";
  }
};
