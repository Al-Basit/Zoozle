import React from "react";
import "../assets/styles/Home.css";
import Header from "../components/Header";
import Search from "../components/Search";
import  Footer from "../components/Footer"

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <img
          // src={'./images/zoozle.png'}
          src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
