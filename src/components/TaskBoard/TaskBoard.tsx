import { Empty, Select } from "antd";
import { useState } from "react";
import { useAppSelector } from "../../hook";
import ChangeTask from "../ChangeTask";
import GridDisplay from "./GridDisplay";
import ListDisplay from "./ListDisplay";

enum Display {
  GRID = "grid",
  LIST = "list",
}

const TaskBoard: React.FC = () => {
  const [changeDisplay, setChamgeDisplay] = useState<Display>(Display.GRID);
  const [changeModalOpen, setChangeModalOpen] = useState<boolean>(false);
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <>
      <Select
        defaultValue={changeDisplay}
        style={{ width: 120 }}
        onChange={(e) => setChamgeDisplay(e)}
        options={[
          { value: Display.GRID, label: "Grid" },
          { value: Display.LIST, label: "List" },
        ]}
      />
      <ChangeTask
        isModalOpen={changeModalOpen}
        setIsModalOpen={setChangeModalOpen}
      />
      {todos.length ? (
        <>
          {changeDisplay === Display.GRID ? (
            <GridDisplay
              todos={todos}
              setChangeModalOpen={setChangeModalOpen}
            />
          ) : (
            <ListDisplay todos={todos} />
          )}
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default TaskBoard;
