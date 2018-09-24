import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import WorkItem from "./WorkItem";

import "minireset.css";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="hero">
        <h1 className="hero-title">mottox2</h1>
        <p className="hero-description">Web Engineer, Prototyper</p>
      </div>
      <section className="section" id="about">
        <h2 className="section-title">About</h2>
        <p className="aboutDescription">
          React.js、GatsbyJS, Ruby on
          Railsを中心に都内で開発しているエンジニアです。<br />
          世界中の人に使われるプロダクトを作るのが夢です。
        </p>
      </section>
      <section className="section" id="works">
        <h2 className="section-title">Works</h2>
        <ul>
          <WorkItem title="すごいC向けサービス" category="2018 - Frontend" />
          <WorkItem
            title="すごいスマートフォンアプリ"
            category="2017 - Design"
          />
        </ul>
      </section>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
