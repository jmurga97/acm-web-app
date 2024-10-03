import {
  handleInitialInfoData,
  handlePagesData,
  handleNewsData,
  handleTestimonialsData,
  handleBannnersColorsData,
  handleBrandData,
} from "@/firebase/api";
import { PageContainer } from "./PageContainer";
import type { Metadata } from "next";
import formatDate from "@/utils/formatDate";
import About from "@/components/Home/About";
import Products from "@/components/Home/Products";
import Start from "@/components/Home/Start";
import Testimonials from "@/components/Home/Testimonials";
import News from "@/components/Home/News";
import Services from "@/components/Home/Services";
import Clients from "@/components/Home/Clients";
import { Suspense } from "react";

const description = "ACM Light ";

// TODO: Añadir mas keywords
export const metadata: Metadata = {
  metadataBase: new URL("https://acmlight.com"),
  title: { default: "Vidext", template: "%s | Vidext" },
  description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: ["ACM Light", "Productos médicos", "Medicina"],
};

// TODO: quitar los div con ids y ponerlo dentro de los componentes

export const Home = async () => {
  const pages = await handlePagesData();

  return (
    <PageContainer pages={pages}>
      <Suspense>
        <BannersSection />
      </Suspense>
      <Suspense>
        <AboutSection />
      </Suspense>
      <Suspense>
        <ProductsSection />
      </Suspense>
      <div id="servicios">
        <Services />
      </div>

      <div id="clientes">
        <Clients />
      </div>
      <Suspense>
        <TestimonialsSection/>
      </Suspense>
      <Suspense>
        <NewsSection />
      </Suspense>
    </PageContainer>
  );
};

const BannersSection = async () => {
  const banners = await handleInitialInfoData();
  const colors = await handleBannnersColorsData();

  return <Start data={banners} colors={colors} />;
};

const AboutSection = async () => {
  const brand = await handleBrandData();
  const brandImages = brand.map((item) => item.img);
  return <About brand={brandImages} />;
};

const ProductsSection = async () => {
  const pages = await handlePagesData();
  return <Products pages={pages} />;
};

const TestimonialsSection = async () => {
  const testimonials = await handleTestimonialsData();
  testimonials.sort((a, b) => {
    // Verificar si la propiedad uploadedAt existe en ambas instancias
    if (a.uploadedAt && b.uploadedAt) {
      return b.uploadedAt - a.uploadedAt;
    } else {
      // Manejar el caso en que uploadedAt no existe en alguna de las instancias
      console.warn("Al menos una instancia no tiene la propiedad uploadedAt.");
      return 0;
    }
  });
  const testimonialsWithDate = testimonials.map((item) => {
    const date = formatDate(item.uploadedAt);
    return {
      ...item,
      uploadedAt: date,
    };
  });
  return <Testimonials testimonials={testimonialsWithDate} />;
};

const NewsSection = async () => {
  const newsData = await handleNewsData();
  newsData.sort((a, b) => b.uploadedAt - a.uploadedAt);
  const newsWithDate = newsData.map((item) => {
    const date = formatDate(item.uploadedAt);
    return {
      ...item,
      uploadedAt: date,
    };
  });

  return <News news={newsWithDate} />;
};
