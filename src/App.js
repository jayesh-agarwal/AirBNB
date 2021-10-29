import Header from "./components/header";
import './App.css';
import Bimg from "./components/bimg";
import ExploreNearby from "./components/ExploreNearby";
import LiveAnywhere from "./components/LiveAnywhere";
import DiscoverThings from "./components/DiscoverThings";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Hosting from "./components/hosting";

function App() {
  return (
    <div>
      <Header />
      <Bimg />
      <ExploreNearby />
      <LiveAnywhere />
      <Hosting />
      <DiscoverThings />
      <Menu />
      <Footer />
    </div>

  );
}

export default App;
