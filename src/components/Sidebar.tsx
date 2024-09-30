import { Flex, FlexProps, Text, useColorModeValue } from "@chakra-ui/react";

export const Sidebar = () => {
  const themeProps = useColorModeValue<FlexProps, FlexProps>(
    { bgColor: "white" },
    { bgColor: "gray.700" }
  );

  return (
    <Flex
      w="200px"
      h="100%"
      py={10}
      px={5}
      alignItems="center"
      flexDir="column"
      borderRight="1px solid"
      {...themeProps}
    >
      <Text>Sidebar</Text>
    </Flex>
  );
};
