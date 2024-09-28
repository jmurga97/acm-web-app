"use client";
import { Hide } from "@chakra-ui/react";
import Image from "next/image";

interface PortraitProps {
  image: string;
  title: string;
  blurData: string;
  below?: string;
  above?: string;
}

const Portrait = ({
  image,
  title,
  blurData,
  below = "",
  above = "",
}:PortraitProps) => {
  return (
    <Hide below={below} above={above}>
      <Image
        priority
        src={image}
        alt={title}
        fill
        style={{ zIndex: -1, objectFit: "cover" }}
        placeholder="blur"
        blurDataURL={blurData}
      />
    </Hide>
  );
};

export default Portrait;
