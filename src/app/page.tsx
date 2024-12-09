import Image from "next/image";
import Navbar from "./components/navbar";
import Todays from "./todays/page";
import Viewall from "./components/viewallproducts";
import Category from "./categaries/page";
import Footer from "./footer/page";
import Thismonth from "./this_month/page";
import Black_Categories from "./black_categories/Page";
import OurProducts from "./ourproducts/page";
import Feature from "./feature/page";
import ServicePage from "./components/service";
import MainPage from "./mainPage/page";

export default function Home() {
  return (
    <div className="  h-full max-w-screen-xl mx-auto font-ag">
      <Navbar />
      <MainPage />
      <Todays />
      <Viewall />
      <Category />
      <Thismonth />
      <Black_Categories />
      <OurProducts />
      <Feature />
      <ServicePage />
      <Footer />
    </div>
  );
}
