import "./App.css";
import Header from "./header/header";
import Specifics from "./specifics/specifics";
import Amazing from "./section-amazing/amazing";
import Projects from "./projects/projects";
import Experiance from "./digital-experiance/experiance";
import Testimonials from "./Testimonials/testimonials";
import Questions from "./Q&A/questions";
import Blogs from "./blogs/Blogs";
import Footer from "./footeer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Specifics />
      <Amazing />
      <Projects />
      <Experiance />
      <Testimonials />
      <Questions />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
