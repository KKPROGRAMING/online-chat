import React from "react";
import "../../../css/asideRight/headBar/HeadBar.css";
import { Switch } from "antd";
import { CloseCircleTwoTone } from '@ant-design/icons';
import { Button} from 'antd';

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
         <Button
          type="primary"
          icon={<CloseCircleTwoTone />}
        />
      </div>
    );
  }
}
