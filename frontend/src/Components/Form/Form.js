import { useState } from "react";
import { Button } from "../Button/Button";
import style from "./Form.module.css";

export function Form({ addDo }) {
  const [inputText, setInputText] = useState("");

  const clicer = inputText => {
    if (!inputText) {
      alert("Введите дело");
      return;
    }
    addDo(inputText);
    setInputText("");
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        clicer(inputText);
      }}
    >
      <input
        className={style.input}
        type="text"
        value={inputText}
        placeholder="Введите дело"
        onChange={e => setInputText(e.target.value)}
      />{" "}
      <Button text_btn="Добавить дело" click={() => clicer(inputText)} />{" "}
    </form>
  );
}
