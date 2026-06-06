import { Services } from "../src/Pages/Sections/Services";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Sections/Contact";
import { About } from "./Pages/Sections/About";
import { NavigationBar } from "./components/NavigationBar"

const App = () => {
  return (
    <div>
      {/* <NavigationBar /> */}
      <Home />
      <Services />
      <About />
      <Contact />
    </div>
  )
};

export default App;