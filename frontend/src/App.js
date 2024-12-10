import { getTodos } from "./fetch/getTodos.js";
import { postTodo } from "./fetch/postTodo.js";
import { deleteTodoPost } from "./fetch/deleteTodoPost.js";
import { patchStatus } from "./fetch/patchStatus.js";
import { updateTextTodo } from "./fetch/updateTextTodo.js";

import { useState, useEffect } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./Components/Form/Form";
import { ItemDo } from "./Components/ItemDo/ItemDo";
import { Modal } from "./Components/Modal/Modal";

function App() {
  const [todos, setTodos] = useState([]);

  async function getTodosServer() {
    let todosSrver = await getTodos();
    console.log(todosSrver);
    setTodos(todosSrver);
    console.log(todos);
  }
  useEffect(() => {
    getTodosServer();
  }, []);

  // const [todos, setTodos] = useState([{
  //         id: 0,
  //         todo: "Выучить JS",
  //         status: true,
  //     },
  //     {
  //         id: 1,
  //         todo: "Выучить CSS",
  //         status: false,
  //     },
  //     {
  //         id: 2,
  //         todo: "Выучить React",
  //         status: true,
  //     },
  // ]);

  const [modal, setModal] = useState(false);

  const [textModal, setTextModal] = useState("222222222222");
  const [idModal, setIdModal] = useState(0);

  let openModal = (id, todo) => {
    setTextModal(todo);
    setIdModal(id);
    setModal(true);
  };

  function addDo(item) {
    postTodo({ todo: item });
    setTimeout(() => {
      getTodosServer();
    }, 300);
  }
  let updateStatusDo = (id, status) => {
    console.log(id);
    patchStatus({ id, status });
    setTimeout(() => {
      getTodosServer();
    }, 300);

    //решение без сервера
    // let allTodos = [...todos];
    // allTodos[id].status = true;
    // setTodos(allTodos);
    // console.log(todos);
  };

  let updateTextDo = text => {
    let newTask = { text, id: idModal };
    updateTextTodo(newTask);
    setModal(!modal);
    setTimeout(() => {
      getTodosServer();
    }, 300);

    //решение без сервера
    // let allTodos = [...todos];
    // allTodos[idModal].todo = text;
    // setTodos(allTodos);
    // setModal(!modal);
  };

  const deleteDo = id => {
    console.log(id);
    deleteTodoPost(id);
    setTimeout(() => {
      getTodosServer();
    }, 1000);
    // const newListDo = todos.filter(i => i.id !== id);
    // setTodos(newListDo);
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
