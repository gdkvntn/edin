import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, List } from "antd";
import { useAppDispatch } from "../../hook";
import { removeTodo, Todo, toggleComplete } from "../../store/todoSlice";
import ChangeTask from "../ChangeTask";
import { useState } from "react";

interface ListDisplayProps {
  todos: Todo[];
}

const ListDisplay: React.FC<ListDisplayProps> = ({ todos }) => {
  const [changeModalOpen, setChangeModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const openChangeModal = (id: number) => {
    setChangeModalOpen(true);
    console.log(id);
  };

  return (
    <>
      <List
        bordered
        itemLayout="horizontal"
        size="large"
        dataSource={todos}
        style={{ width: "100%" }}
        pagination={{
          pageSize: 4,
        }}
        renderItem={(todo) => (
          <>
            <List.Item
              actions={[
                <Checkbox
                  checked={todo.completed}
                  onChange={() => dispatch(toggleComplete(todo.id))}
                />,
                <Button onClick={() => openChangeModal(todo.id)}>
                  <EditOutlined key="edit" />
                </Button>,
                <Button>
                  <CloseCircleOutlined
                    key="close"
                    onClick={() => dispatch(removeTodo(todo.id))}
                  />
                </Button>,
              ]}
              style={
                todo.completed
                  ? { backgroundColor: "rgb(125 188 234 / 30%)" }
                  : undefined
              }
            >
              <List.Item.Meta title={todo.title} description={todo.text} />
              <div style={{ fontSize: "10px" }}>{todo.date}</div>
            </List.Item>
          </>
        )}
      />
    </>
  );
};

export default ListDisplay;
