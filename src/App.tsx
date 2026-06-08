import { Services } from "../src/Pages/Sections/Services";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Sections/Contact";
import { About } from "./Pages/Sections/About";
import { NavigationBar } from "./components/NavigationBar"
import { Footer } from "./components/Footer"
import { MobileNavigation } from "./components/MobileNavigation";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <MobileNavigation />
        <Home />
          <Services />
          <About />
          <Contact />
      <Footer />
    </div>
  )
};

export default App;