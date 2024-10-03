import "../assets/styles/globals.css";
import { Montserrat } from "next/font/google";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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


//TODO: fix el puto useEffect para que funcione analytics
const GeneralLayout = ({ children }: { children: React.ReactNode }) => {

  //Necesario para captar la navegación por cada ruta de la página para PostHog
  //Necesario para captar la navegación por cada ruta de la página para PostHog
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
    <html lang="es">
      <body className={`${montserrat.className}`}>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
};

export default GeneralLayout;
