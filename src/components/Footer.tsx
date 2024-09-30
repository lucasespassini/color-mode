import { Card, CardBody, Text } from "@chakra-ui/react";
import packageJson from "../../package.json";

export const Footer = () => {
  return (
    <Card borderRadius="none" borderTop="1px solid">
      <CardBody py={1}>
        <Text textAlign="center">v{packageJson.version}</Text>
      </CardBody>
    </Card>
  );
};
