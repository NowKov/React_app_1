import { NavLink } from "react-router-dom";
import class_dialogs from "./Dialogs.module.css";

const DialogsItem = (props) => {
  return (
    <div className={class_dialogs.dialog + " " + class_dialogs.active}>
      <NavLink to={"/dialogs"}>{props.name}</NavLink>
    </div>
  );
};

const MessagesItem = (props) => {
  return <div className={class_dialogs.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={class_dialogs.dialogs}>
      <div className={class_dialogs.dialog_item}>
        <DialogsItem id={"1"} name={"Ekaterina"} />
        <DialogsItem id={"2"} name={"Yulia"} />
        <DialogsItem id={"3"} name={"Nadiay"} />
        <DialogsItem id={"4"} name={"Viacheslav"} />
        <DialogsItem id={"5"} name={"Oksana"} />
        <DialogsItem id={"6"} name={"Evgeniy"} />
        <DialogsItem id={"7"} name={"Aleksandr"} />
        <DialogsItem id={"8"} name={"Ivan"} />
      </div>
      <div className={class_dialogs.messages}>
        <MessagesItem message={"Hi"} />
        <MessagesItem message={"What is your name?"} />
        <MessagesItem message={"My name is Andrey"} />
      </div>
      Dialogs
    </div>
  );
};

export default Dialogs;
