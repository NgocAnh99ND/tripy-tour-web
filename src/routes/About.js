import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg"
// import AboutImg from "../assets/1.jpg" => thay đổi số sau assest đê đổi ảnh có trong file assets
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
    return(
        <>
          <Navbar/>
          <Hero 
          cName="hero-mid"
          heroImg={AboutImg}
          title="About"
          btnClass="hide"
          />
          <AboutUs />
          <Footer />
        </> 
    );
}

export default About;