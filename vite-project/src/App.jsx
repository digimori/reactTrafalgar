import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import OurServices from "./components/Services/OurServices";
import LeadingProviders from "./components/LeadingProviders";
import DownloadMobApp from "./components/DownloadMobileApp/DownloadMobApp";
import Testimonials from "./components/Testimonials";
import LatestArticles from "./components/Articles/LatestArticles";
import Footer from "./components/Footer";
import NavigationBar from "./components/Navigation/NavigationBar";
import Header from "./components/Header/Header";

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
