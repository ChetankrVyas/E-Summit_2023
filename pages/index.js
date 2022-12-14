import Head from "next/head";
import Footer from "../components/footer";
import Professiondesign from "../components/Professiondesign"
import Navbar from "../components/Navbar";
import HeaderMain from "../components/header/header";
import Helpdesk from "../components/helpdesk/helpdesk";
import Testimonial from "../components/helpdesk/testimonial";
import Awesomefeature from "../components/Awesomefeature";
import Layout from "../components/layout";
import Workinfo from "../components/workinfo";
import Crustinfo from "../components/Crustinfo.jsx";
import Discover from "../components/discover";

export default function Home() {
  return (
    <div style={{ background: "black" }}>
      <Head>
        <title>E-Summit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <HeaderMain />
     
    
      <Crustinfo />
      <Discover />
      <Layout />
      <Workinfo />
      <Professiondesign/>
      <Awesomefeature />
      <Helpdesk />
      <Testimonial />

      {/* <Helpdesk /> */}

      <Footer />
    </div>
  );
}
