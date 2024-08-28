import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Interior from "./Components/InteriorProjects/Interior";
import Fabrication from "./Components/Fabrication/Fabrication";
import Conferences from "./Components/Confrences/Conferences";
import ProductLaunch from "./Components/ProuductLaunch/ProductLaunch";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Header2 from "./Components/Navbar/Header2";

function App() {

  return (
    <>
      <Header2/>
        <div style={{ height: '65px', padding: '0px' }}>
        </div>
      <Header />
      <Fabrication />
      <Services />
      <Conferences />
      <ProductLaunch />
      <Interior />
      <About />
      <Footer />
    </>
  )
}

export default App
