
import "./App.css";

import Heading from "./components/Heading";
import Summary from "./components/Summary";
import Jobs from "./components/Jobs";
import Skills from "./components/Skills";
import Educations from "./components/Educations";
import { Contact, ContactEdit } from "./components/Contact";

function App() {
  return (
    <main>
      <Heading />
      <ContactEdit />
      <Contact />
      <Summary />
      <Jobs />
      <Skills />
      <Educations />
    </main>
  );
}

export default App;
