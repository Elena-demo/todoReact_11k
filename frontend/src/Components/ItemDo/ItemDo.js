import style from "./ItemDo.module.css";
import { ImCog, ImCheckmark2, ImCross } from "react-icons/im";

export const ItemDo = ({ openModal, item, updateStatusDo, deleteDo }) => {
  return (
    <div className={style.item}>
      <div className={style.item__text}>
        <h3 className={style.p}> {item.todo} </h3>{" "}
        <div className={style.icons}>
          <ImCog
            className={style.icon}
            onClick={() => openModal(item.id, item.todo)}
          />{" "}
          {!item.status && (
            <ImCheckmark2
              className={style.icon}
              onClick={() => updateStatusDo(item.id)}
            />
          )}{" "}
          <ImCross className={style.icon} onClick={() => deleteDo(item.id)} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
