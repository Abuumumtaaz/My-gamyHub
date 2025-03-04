import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./Realcomponents/Nav";
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";
import ColorModeSwitch from "./Realcomponents/ColorModeSwitch";
import GameGrid from "./Realcomponents/GameGrid";

function App() {
  return (
    <DarkMode>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Nav />{" "}
        </GridItem>

        <GridItem area="aside" display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </DarkMode>
  );
}

export default App;
