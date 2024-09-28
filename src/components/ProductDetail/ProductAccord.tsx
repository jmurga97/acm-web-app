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
import ProductHtmlContent from "./ProductHtmlContent";

interface ProductAccordProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
  divider?: boolean;
}

const ProductAccord = ({ title, content, children, divider = false }:ProductAccordProps) => {
  return (
    <>
      {divider && <Divider m="40px 0" />}
      <Accordion allowToggle m="40px 0">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                color="brand.100"
                fontWeight="600"
                fontSize="1.2rem"
              >
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {content ? <ProductHtmlContent content={content} /> : children}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ProductAccord;
