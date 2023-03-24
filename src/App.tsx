import { Button } from "antd";

import Layout from "antd/es/layout";
import { Typography } from "antd";
import React from "react";
import Theme from "./components/Theme";
import AddTodoForm from "./components/AddTodoForm";
import TaskBoard from "./components/TaskBoard/TaskBoard";
const { Header, Footer, Content } = Layout;

const { Title } = Typography;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "rgb(125 188 234 / 30%)",
  marginBottom: "20px",
};
const contentStyle: React.CSSProperties = {
  maxWidth: "1200px",
  width: "100%",
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  padding: "0 10px",
};

function App() {
  return (
    <Theme>
      <Layout>
        <Header style={headerStyle}>
          <Title>Todo</Title>
        </Header>
        <Content style={contentStyle}>
          <AddTodoForm />
          <TaskBoard />
        </Content>
        <Footer>
          <Button
            type="link"
            href="https://www.linkedin.com/in/anton-hudkou-365837239/"
          >
            by gdkvntn
          </Button>
        </Footer>
      </Layout>
    </Theme>
  );
}

export default App;
