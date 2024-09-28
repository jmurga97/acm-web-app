import "@/assets/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
// import { analytics } from "@/firebase/analytics";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";


const colors = {
  brand: {
    100: "#b0d236",
    200: "#dcea8c",
    300: "#72c5cb",
    400: "#b5eaea",
    500: "#838384",
    600: "#c6c6c6",
  },
};

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const theme = extendTheme({ colors });


function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = () =>
  //     logEvent(analytics, "page_view", {
  //       page_location: `${router.basePath}${router.asPath}`,
  //       page_path: router.asPath,
  //       page_title: router.asPath,
  //     });
  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };

  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router.events]);


  return (
    <AnimatePresence mode="wait">
      <ChakraProvider theme={theme}>
        <main className={montserrat.className}>
          <LazyMotion features={domAnimation}>
            {children}
          </LazyMotion>
        </main>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default RootLayout
