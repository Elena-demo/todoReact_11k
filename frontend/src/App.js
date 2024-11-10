import { useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./Components/Form/Form";
import { ItemDo } from "./Components/ItemDo/ItemDo";
import { Modal } from "./Components/Modal/Modal";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      todo: "Выучить JS",
      status: true,
    },
    {
      id: 1,
      todo: "Выучить CSS",
      status: false,
    },
    {
      id: 2,
      todo: "Выучить React",
      status: true,
    },
  ]);
  const [modal, setModal] = useState(false);

  const [textModal, setTextModal] = useState("222222222222");
  const [idModal, setIdModal] = useState(0);

  let openModal = (id, todo) => {
    console.log(id, todo); //приходит Дело
    setTextModal(todo); //пытаюсь изменить State
    setIdModal(id);
    console.log(textModal); //State не изменился ПОЧЕМУ??????
    setModal(true);
  };

  function addDo(item) {
    const newDo = {
      id: todos.length,
      todo: item,
      status: false,
    };
    setTodos([...todos, newDo]);
  }
  let updateStatusDo = id => {
    console.log(id);
    let allTodos = [...todos];
    allTodos[id].status = true;
    setTodos(allTodos);
    console.log(todos);
  };

  let updateTextDo = text => {
    let allTodos = [...todos];
    allTodos[idModal].todo = text;
    setTodos(allTodos);
    setModal(!modal);
  };

  const deleteDo = id => {
    console.log(id);
    const newListDo = todos.filter(i => i.id !== id);
    setTodos(newListDo);
  };
  return (
    <div className="container">
      <h1> Список дел </h1> <Form addDo={addDo} />{" "}
      {!todos.length ? (
        <h3> Дел нет </h3>
      ) : (
        todos.map(item => (
          <ItemDo
            openModal={openModal}
            updateStatusDo={updateStatusDo}
            item={item}
            deleteDo={deleteDo}
          />
        ))
      )}{" "}
      {modal && (
        <Modal modal={modal} text={textModal} updateTextDo={updateTextDo} />
      )}{" "}
    </div>
  );
}

export default App;
