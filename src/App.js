import React from "react";
import "./App.css";
import AsideLeft from "./js/asideLeft/AsideLeft";
import AsideRight from "./js/asideRight/AsideRight";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainStyle: "main",
      AppStyle: "App",
    };
    this.changeStyle = this.changeStyle.bind(this);
  }
  changeStyle() {
    if (this.state.mainStyle === "main-night") {
      this.setState({
        mainStyle: "main",
        AppStyle: "App",
      });
    } else {
      this.setState({
        mainStyle: "main-night",
        AppStyle: "App-night",
      });
    }
  }
  render() {
    return (
      <main className={this.state.mainStyle}>
        <div className={this.state.AppStyle}>
          <AsideLeft />
          <AsideRight changeStyle={this.changeStyle} />
        </div>
      </main>
    );
  }
}
