import RoomService from "@roomservice/browser";
import { useRoomService } from "@roomservice/react";
import React from "react";
import Screen from "../components/screen";

const client = new RoomService({
  authUrl: "http://localhost:3000/api/roomservice"
});

export default () => {
  const [doc, setDoc] = useRoomService(client, "my-room");

  function changeColorOne() {
    setDoc(doc => {
      if (doc.one === "red") {
        doc.one = "blue";
      } else if (doc.one === "blue") {
        doc.one = "pink";
      } else if (doc.one === "pink") {
        doc.one = "purple";
      } else if (doc.one === "purple") {
        doc.one = "black";
      } else {
        doc.one = "red";
      }
    });
  }

  function changeColorTwo() {
    setDoc(doc => {
      if (doc.two === "red") {
        doc.two = "blue";
      } else if (doc.two === "blue") {
        doc.two = "pink";
      } else if (doc.two === "pink") {
        doc.two = "purple";
      } else if (doc.two === "purple") {
        doc.two = "black";
      } else {
        doc.two = "red";
      }
    });
  }

  function changeColorThree() {
    setDoc(doc => {
      if (doc.three === "red") {
        doc.three = "blue";
      } else if (doc.three === "blue") {
        doc.three = "pink";
      } else if (doc.three === "pink") {
        doc.three = "purple";
      } else if (doc.three === "purple") {
        doc.three = "black";
      } else {
        doc.three = "red";
      }
    });
  }

  function changeColorFour() {
    setDoc(doc => {
      if (doc.four === "red") {
        doc.four = "blue";
      } else if (doc.four === "blue") {
        doc.four = "pink";
      } else if (doc.four === "pink") {
        doc.four = "purple";
      } else if (doc.four === "purple") {
        doc.four = "black";
      } else {
        doc.four = "red";
      }
    });
  }

  function changeColorFive() {
    setDoc(doc => {
      if (doc.five === "red") {
        doc.five = "blue";
      } else if (doc.five === "blue") {
        doc.five = "pink";
      } else if (doc.five === "pink") {
        doc.five = "purple";
      } else if (doc.five === "purple") {
        doc.five = "black";
      } else {
        doc.five = "red";
      }
    });
  }

  function changeColorSix() {
    setDoc(doc => {
      if (doc.six === "red") {
        doc.six = "blue";
      } else if (doc.six === "blue") {
        doc.six = "pink";
      } else if (doc.six === "pink") {
        doc.six = "purple";
      } else if (doc.six === "purple") {
        doc.six = "black";
      } else {
        doc.six = "red";
      }
    });
  }

  function changeColorSeven() {
    setDoc(doc => {
      if (doc.seven === "red") {
        doc.seven = "blue";
      } else if (doc.seven === "blue") {
        doc.seven = "pink";
      } else if (doc.seven === "pink") {
        doc.seven = "purple";
      } else if (doc.seven === "purple") {
        doc.seven = "black";
      } else {
        doc.seven = "red";
      }
    });
  }

  function changeColorEight() {
    setDoc(doc => {
      if (doc.eight === "red") {
        doc.eight = "blue";
      } else if (doc.eight === "blue") {
        doc.eight = "pink";
      } else if (doc.eight === "pink") {
        doc.eight = "purple";
      } else if (doc.eight === "purple") {
        doc.eight = "black";
      } else {
        doc.eight = "red";
      }
    });
  }

  function changeColorNine() {
    setDoc(doc => {
      if (doc.nine === "red") {
        doc.nine = "blue";
      } else if (doc.nine === "blue") {
        doc.nine = "pink";
      } else if (doc.nine === "pink") {
        doc.nine = "purple";
      } else if (doc.nine === "purple") {
        doc.nine = "black";
      } else {
        doc.nine = "red";
      }
    });
  }

  return (
    <div>
      <Screen backgroundColor={doc.one} onClick={changeColorOne} />
      <Screen backgroundColor={doc.two} onClick={changeColorTwo} />
      <Screen backgroundColor={doc.three} onClick={changeColorThree} />
      <Screen backgroundColor={doc.four} onClick={changeColorFour} />
      <Screen backgroundColor={doc.five} onClick={changeColorFive} />
      <Screen backgroundColor={doc.six} onClick={changeColorSix} />
      <Screen backgroundColor={doc.seven} onClick={changeColorSeven} />
      <Screen backgroundColor={doc.eight} onClick={changeColorEight} />
      <Screen backgroundColor={doc.nine} onClick={changeColorNine} />
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          max-width: 800px;
        }
      `}</style>
    </div>
  );
};

// assign them all their own object doc.screen1, 2, etc
//
