import React, { useContext } from "react";
import Switch from "react-switch";
import { shade } from "polished";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

interface Props {
  toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  console.log("title", title);
  return (
    <Container>
      Hello Word
      <Switch
        onChange={toogleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;
