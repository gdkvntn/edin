import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, List } from "antd";
import { useAppDispatch } from "../../hook";
import {
  addChangeTodo,
  removeTodo,
  Todo,
  toggleComplete,
} from "../../store/todoSlice";

interface ListDisplayProps {
  todos: Todo[];
  setChangeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListDisplay: React.FC<ListDisplayProps> = ({
  todos,
  setChangeModalOpen,
}) => {
  const dispatch = useAppDispatch();

  const openChangeModal = (todo: Todo) => {
    setChangeModalOpen(true);
    dispatch(addChangeTodo(todo));
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
                <Button onClick={() => openChangeModal(todo)}>
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
