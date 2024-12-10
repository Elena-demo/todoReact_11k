import { useState } from "react";
import style from "./Modal.module.css";
import { ImCross } from "react-icons/im";

export function Modal({ modal, text, updateTextDo }) {
  const [inputText, setInputText] = useState(text);

  console.log(inputText);

  const modalClose = () => {
    !inputText ? alert("Вы ничего не ввели!") : updateTextDo(inputText);
  };

  return (
    <div className={modal ? style.show : style.modal}>
      <form
        className={style.modal_window}
        onSubmit={e => {
          e.preventDefault();
          modalClose();
        }}
      >
        {" "}
        Отредактируйте Ваше дело{" "}
        <input
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />{" "}
        <div className={style.btn_close}>
          <ImCross onClick={modalClose} />{" "}
        </div>{" "}
      </form>{" "}
      <div className={style.modal_overlay} onClick={modalClose}>
        {" "}
      </div>{" "}
    </div>
  );
}
