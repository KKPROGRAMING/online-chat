import React from "react";
import "../../../css/asideRight/headBar/HeadBar.css";
import { Switch } from "antd";
import { SettingFilled } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

export default class HeadBar extends React.Component {
  render() {
    return (
      <div className="headBar">
        <Switch
          checkedChildren="🌞"
          unCheckedChildren="🌛"
          onChange={this.props.changeStyle}
          defaultChecked
        />
        <Tooltip title="设置">
          <Button
            type="primary"
            icon={<SettingFilled twoToneColor="#edf7fe" />}
          />
        </Tooltip>
      </div>
    );
  }
}
