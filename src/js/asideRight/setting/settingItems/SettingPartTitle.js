import React, { Fragment } from "react";
import "../../../../css/asideRight/setting/settingItems/SettingPartTitle.css";
import {Divider} from "antd";

export default class SettingPartTitle extends React.Component {
    render(){
        return (
            <div className="settingPartTitle">
                <div className="titleIcon">
                {this.props.icon}
                </div>
                
                {this.props.content}
            </div>
        );
    }
}