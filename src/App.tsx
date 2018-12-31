import React, { Component } from "react";
import "./App.css";
import { getSortedItemList } from "./helpers";
import { Page } from "./Page";

const YEAR = 2019;
const PLACE = "Bratislava";

const rows = ["ahojahoj#yz#sziaszia#zz", "ahoj#xy#szia#xz", "x#x#x#x"];

class App extends Component {
  getVerseCardsLayout = () => {
    const items = getSortedItemList(rows);
    const pages = [];
    for (let i = 0; i < items.length / 8; i++) {
      pages.push(
        <Page key={i} pageNumber={i} year={YEAR} place={PLACE} verses={items} />
      );
    }
    return pages;
  };
  render() {
    return <div className="App">{this.getVerseCardsLayout()}</div>;
  }
}

export default App;
