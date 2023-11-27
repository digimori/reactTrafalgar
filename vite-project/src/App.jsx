import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import LeadingProviders from './components/LeadingProviders';
import DownloadMobApp from './components/DownloadMobApp';
import Testimonials from './components/Testimonials';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <OurServices />
      <LeadingProviders />
      <DownloadMobApp />
      <Testimonials />
      <LatestArticles />
      <Footer />
    </div>

  )
}

export default App
