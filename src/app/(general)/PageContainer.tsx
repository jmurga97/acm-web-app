"use client";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import IconButton from "@/components/IconButton";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "@/assets/styles/Home.module.css";

const DynamicNavBar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
  loading: () => null,
});

const DynamicCart = dynamic(() => import("@/components/Cart"), {
  loading: () => null,
});

//TODO: Arreglar isInView solo para index
export const PageContainer = ({ children, pages }: { children: React.ReactNode, pages:unknown[] }) => {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <AnimatePresence mode="wait">
      <LazyMotion features={domAnimation}>
        <div id="top" ref={ref} className={styles.navBarInitPosition}></div>
        <DynamicCart isOpen={isOpen} onClose={onClose} />
        <DynamicNavBar atTop={isInView} pages={pages} openCart={onOpen} />
        <m.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.75,
          }}
        >
          {children}
        </m.div>
        <a
          href="https://api.whatsapp.com/send?phone=584242639613"
          target="_blank"
        >
          <IconButton
            icon={<AiOutlineWhatsApp />}
            size="lg"
            style={{ position: "fixed", bottom: "20px", left: "20px" }}
          />
        </a>

        <Footer />
      </LazyMotion>
    </AnimatePresence>
  );
};
