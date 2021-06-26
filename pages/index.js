import Head from "next/head";
import Header from "../Layout/Header";
import SectionChoice from "../Layout/SectionChoice";
import SectionSearch from "../Layout/SectionSearch";
import SectionCards from "../Layout/SectionCards";
import Footer from "../Layout/Footer";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({
    query: "(max-width: 599px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-device-width: 600px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isDesktop={isDesktop} />
      <SectionChoice />
      <SectionSearch />
      <SectionCards
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
      />
      <Footer />
    </>
  );
}
