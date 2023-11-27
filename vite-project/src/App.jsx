import 'bootstrap/dist/css/bootstrap.min.css';
import OurServices from './components/OurServices';
import LeadingProviders from './components/LeadingProviders';
import DownloadMobApp from './components/DownloadMobileApp/DownloadMobApp';
import Testimonials from './components/Testimonials';
import LatestArticles from './components/Articles/LatestArticles';
import Footer from './components/Footer';
import NavigationBar from './components/Navigation/NavigationBar';
import './App.css'


function App() {

  return (
    <div>
      <NavigationBar />
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
