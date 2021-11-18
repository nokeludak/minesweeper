import React from "react";


export default function Cell({ details, updateFlag, revealCell }) {
  return (

    
    <div className="box" 
    onContextMenu={(e) => 
    updateFlag(e, details.x, details.y)} 
    onClick={() => revealCell(details.x, details.y)}>
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

