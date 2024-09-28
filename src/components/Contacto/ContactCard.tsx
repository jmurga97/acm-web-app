"use client";
import {
  Text,
  Card,
  CardHeader,
  CardBody,
  Center,
} from "@chakra-ui/react";

interface ContactCardProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

const ContactCard = ({ icon, text, link }:ContactCardProps) => {
  const hoverLink = {
    fontWeight: "600",
    color: "brand.100",
  };
  return (
    <Card>
      <CardHeader color="brand.100">
        <Center>{icon}</Center>
      </CardHeader>
      <CardBody p="0 8px 12px 8px">
        <Text
          _hover={hoverLink}
          fontSize="0.8rem"
          fontWeight="300"
          align="center"
        >
          <a href={link}>{text}</a>
        </Text>
      </CardBody>
    </Card>
  );
};

export default ContactCard;
