import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from "./components/Lodge";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="lodge">
          <Menu />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
