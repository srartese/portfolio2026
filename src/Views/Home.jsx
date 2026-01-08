import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Featured from "../Components/Projects/Featured";
import Connect from "../Components/Connect/Connect";
import Experience from "../Components/Experience/Experience";

function Home() {
  return (
    <div className="home">
      <Nav></Nav>
      <Header></Header>
      <Featured></Featured>
      <Experience></Experience>
      <Connect></Connect>
      <Footer></Footer>
    </div>
  );
}

export default Home;
