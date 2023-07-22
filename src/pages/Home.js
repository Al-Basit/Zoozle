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
          src={'./images/zoozle.png'}
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
