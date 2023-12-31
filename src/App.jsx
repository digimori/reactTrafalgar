import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import OurServices from "./components/Services/OurServices";
import LeadingProviders from "./components/LeadingProviders/LeadingProviders";
import DownloadMobApp from "./components/DownloadMobileApp/DownloadMobApp";
import Testimonials from "./components/Testimonials/Testimonials";
import LatestArticles from "./components/Articles/LatestArticles";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navigation/NavigationBar";
import Header from "./components/Header/Header";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <OurServices />
      <LeadingProviders />
      <DownloadMobApp />
      <Testimonials />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
