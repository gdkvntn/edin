import { Card, Row, Col, Checkbox } from "antd";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import {
  addChangeTodo,
  removeTodo,
  Todo,
  toggleComplete,
} from "../../store/todoSlice";
import { useAppDispatch } from "../../hook";

interface GridDisplayProps {
  todos: Todo[];
  setChangeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GridDisplay: React.FC<GridDisplayProps> = ({
  todos,
  setChangeModalOpen,
}) => {
  const dispatch = useAppDispatch();

  const openChangeModal = (todo: Todo) => {
    dispatch(addChangeTodo(todo));
    setChangeModalOpen(true);
  };

  return (
    <Row gutter={[16, 16]} wrap justify={"center"}>
      {todos.map((todo) => {
        return (
          <Col key={todo.id} span={8} style={{ minWidth: "300px" }}>
            <Card
              title={todo.title}
              actions={[
                <Checkbox
                  checked={todo.completed}
                  onChange={(e) => dispatch(toggleComplete(todo.id))}
                />,
                <EditOutlined
                  key="edit"
                  onClick={() => openChangeModal(todo)}
                />,
                <CloseCircleOutlined
                  key="close"
                  onClick={() => dispatch(removeTodo(todo.id))}
                />,
              ]}
              style={
                todo.completed
                  ? {
                      borderColor: "rgb(125, 188, 234)",
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                    }
                  : {
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                    }
              }
              bodyStyle={{ overflow: "auto", maxHeight: "85px" }}
              extra={todo.date}
            >
              <Paragraph> {todo.text}</Paragraph>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default GridDisplay;
