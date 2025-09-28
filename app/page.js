import DontMiss from "@/components/DontMiss/DontMiss";
import Footer from "@/components/Footer/Footer";
import HandPickedHighlights from "@/components/HandPickedHighlights/HandPickedHighlights";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ShopByCategory from "@/components/ShopByCategory/ShopByCategory";
import Testimonial from "@/components/Testimonial/Testimonial";
import Topbar from "@/components/Topbar/Topbar";

export default function Home() {
  return (
   <div>
    <Topbar />
    <Header/>
    <Hero/>
    <ShopByCategory/>
    <HandPickedHighlights/>
    <Testimonial/>
    <DontMiss/>
    <Footer/>
   </div>
  );
}
