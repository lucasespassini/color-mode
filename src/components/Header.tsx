import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Card w="100%" borderRadius="none" borderBottom="1px solid">
      <CardBody
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={4}
      >
        <Text fontWeight="600" fontSize="1.5rem">
          Logo
        </Text>

        <Flex cursor="pointer" fontSize="1.5rem" onClick={toggleColorMode}>
          {Icon}
        </Flex>
      </CardBody>
    </Card>
  );
};
