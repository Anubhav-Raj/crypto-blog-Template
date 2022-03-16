import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
 import RecentPost from './components/RecentPost/recentpost'
  import Footer  from './components/Footer'
const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <RecentPost/>
      <Footer/>
    </>
  );
};

export default App;
