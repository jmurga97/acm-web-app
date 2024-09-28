"use client";
import { m } from "framer-motion";

interface AnimateTitleProps {
    children: React.ReactNode;
}

const AnimateTitle = ({children}:AnimateTitleProps) => {
    return (
        <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              {children}
        </m.div>
     );
}

export default AnimateTitle;