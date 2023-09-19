import About from "./Components/About";
import Header from "./Components/Header";
import Link from "./Components/Link";
import Photo from "./Components/Photo";
import { AboutText, links } from "./constants";

function App() {
  return (
    <div className="App">
      <Header />
      <Photo src={links.selfiAvatar.src} alt={links.selfiAvatar.alt} />
      <Photo src={links.scoolAvatar.src} alt={links.scoolAvatar.alt} />
      <About text={AboutText} />
      <Link />
    </div>
  );
}

export default App;
