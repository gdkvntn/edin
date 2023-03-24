import React, { useState } from "react";
import { Switch } from "antd";
import ConfigProvider from "antd/es/config-provider";

type Css = React.CSSProperties;

const lightTheme = {
  colorBgBase: "#fff",
  colorTextBase: "#000",
};
const darkTheme = {
  colorBgBase: "#292929",
  colorTextBase: "#E6E6FA",
};

const SwitchStyle: Css = {
  position: "absolute",
  left: "20px",
  top: "20px",
};

const Theme: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(true);

  return (
    <ConfigProvider
      theme={{
        token: currentTheme === true ? lightTheme : darkTheme,
      }}
    >
      <Switch
        style={SwitchStyle}
        onChange={(e) => setCurrentTheme(e)}
        checkedChildren="light"
        unCheckedChildren="dark"
        defaultChecked
      />
      {children}
    </ConfigProvider>
  );
};

export default Theme;
