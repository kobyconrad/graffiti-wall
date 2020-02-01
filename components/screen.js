import React from "react";

function Screen(props) {
  return (
    <div onClick={props.onClick}>
      <style jsx>{`
        div {
          background-color: ${props.backgroundColor};
          height: 250px;
          width: 250px;
        }
      `}</style>
    </div>
  );
}

export default Screen;
