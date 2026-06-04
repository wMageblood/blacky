import { Services } from "../src/Pages/Sections/Services";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Sections/Contact";
import { About } from "./Pages/Sections/About";

const App = () => {
  return (
    <div>
      <Home />
      <Services />
      <About />
      <Contact />
    </div>
  )
};

export default App;