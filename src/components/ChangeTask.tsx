import React, { useState } from "react";
import { Modal } from "antd";

import TextArea from "antd/es/input/TextArea";
import { changeTodo } from "../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../hook";

interface ChangeTaskProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeTask: React.FC<ChangeTaskProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) => state.todos.todo);
  const [title, setTitle] = useState<string>(todo.title);
  const [text, setText] = useState<string>(todo.text);
  const currentTitle = title || todo.title;
  const currentText = text || todo.text;

  const onCancelModal = () => {
    setIsModalOpen(false);
    setText("");
    setTitle("");
  };

  const onOkModal = () => {
    console.log(title, text);
    dispatch(
      changeTodo({ title: currentTitle, text: currentText, id: todo.id })
    );
    setIsModalOpen(false);
    setText("");
    setTitle("");
  };
  debugger;
  return (
    <>
      <Modal
        title="Change task"
        open={isModalOpen}
        onOk={onOkModal}
        onCancel={onCancelModal}
      >
        <TextArea
          autoSize
          value={currentTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div style={{ margin: "24px 0" }} />
        <TextArea
          autoSize={{ minRows: 2, maxRows: 6 }}
          value={currentText}
          onChange={(e) => setText(e.target.value)}
        />
        <div style={{ margin: "24px 0" }} />
      </Modal>
    </>
  );
};

export default ChangeTask;
