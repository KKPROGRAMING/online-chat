import React from "react";
import "../../../css/asideLeft/asideItems/FootBar.css";
import { Segmented } from "antd";

const options = ["消息", "联系人", "添加"];

export default class FootBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "联系人",
    };
    this.changeFootBarValue = this.changeFootBarValue.bind(this);
  }
  changeFootBarValue(event) {
    this.setState({value:event});
    // console.log(event);
    this.props.selectSegmented(event);
  }
  render() {
    return (
      <div className="footBar">
        <Segmented
          block
          options={options}
          value={this.state.value}
          onChange={this.changeFootBarValue}
        />
      </div>
    );
  }
}
