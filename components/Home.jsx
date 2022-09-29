import Customer from "./Customer";
import Footer from "./Footer";
import "./Home.css";
import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Banner from "./Banner";
import Accordion from "./Accordion";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Accordion />
      <Customer />
      <Newsletter />
      <Footer />
      {/* <!-- Nav Bar Section --> */}
      {/* <!-- banner section --> */}
      {/* <!-- Frequently Ask Question bootstrap Accordion --> */}
      {/* <!-- Customer's feedback bootstrap card--> */}
      {/* <!-- Newsletter Bootstrap input group--> */}
      {/* <!-- Footer --> */}
    </>
  );
};

export default Home;
