import { Form, Input, Button, Card } from "antd";
import { useAppDispatch } from "../hook";
import { addTodo } from "../store/todoSlice";
import React, { useState } from "react";
const { TextArea } = Input;

const AddTodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();

  const addTodoFunc = () => {
    dispatch(addTodo({ title, text }));
    setTitle("");
    setText("");
  };

  return (
    <Card
      title="Add a task"
      style={{ width: 300, textAlign: "center", margin: "0 auto" }}
    >
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 30 }} layout="vertical">
        <Form.Item label="Title">
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Task">
          <TextArea
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={addTodoFunc}>
            Add
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddTodoForm;
