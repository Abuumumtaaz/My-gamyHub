import { Button, HStack, Switch } from "@chakra-ui/react";
import { DarkMode, LightMode, useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Button size="sm" variant="subtle" onClick={toggleColorMode}>
        Toggle
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
