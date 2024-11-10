import { useState } from "react";
import style from "./Modal.module.css";
import { ImCross } from "react-icons/im";

export function Modal({ modal, text, updateTextDo }) {
  const [inputText, setInputText] = useState(text);

  console.log(inputText);

  const modalClose = () => {
    updateTextDo(inputText);
  };

  return (
    <div className={modal ? style.show : style.modal}>
      <div className={style.modal_window}>
        {" "}
        Отредактируйте Ваше дело{" "}
        <input
          value={inputText}
          onChange={e =>
            e.target.value
              ? setInputText(e.target.value)
              : alert("Вы ничего не ввели!")
          }
        />{" "}
        <div className={style.btn_close}>
          <ImCross onClick={modalClose} />{" "}
        </div>{" "}
      </div>{" "}
      <div className={style.modal_overlay}> </div>{" "}
    </div>
  );
}
