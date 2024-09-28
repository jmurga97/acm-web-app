"use client";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Divider,
} from "@chakra-ui/react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  divider?: boolean;
  color?: string;
}

const Accord = ({ title, children, divider = false, color = 'brand.100' }:AccordionProps) => {
  return (
    <>
      {divider && <Divider m="40px 0" />}
      <Accordion allowToggle >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                color={color}
                fontWeight="600"
              >
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={2}>{children}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Accord;
