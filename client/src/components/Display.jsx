import { Modal } from "./Modal";
import { useState } from "react";
import "./Display.css";

export function Display({ results }) {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState(false);
  function onClickImg(result) {
    setModal(true);
    setImg(result);
    console.log(img);
  }

  return (
    <div className="display-container">
      <div className="display-wrapper">
        {results.map((result) => {
          return (
            <div className="image-container" key={result.id}>
              <img
                id="img"
                src={result.webformatURL}
                alt={result.tags}
                onClick={() => {
                  onClickImg(result);
                }}
              />
            </div>
          );
        })}
      </div>
      {modal && <Modal img={img} setModal={setModal} />}
    </div>
  );
}

/* 
<ul>
        {results.map((result) => {
          return (
            <li id="image-container" key={result.id}>
              <img
                height="150px"
                width="150px"
                src={result.largeImageURL}
                alt={result.tags}
              />
            </li>
          );
        })}
      </ul>
*/
