import React from "react";
import "../../../../css/asideRight/setting/settingItems/VersionInfo.css";
import SettingPartTitle from "./SettingPartTitle";
import {Divider} from "antd";
import {InfoCircleOutlined} from "@ant-design/icons";

export default class VersionInfo extends React.Component {
    render(){
        return (
            <div className="versionInfo">
                <SettingPartTitle icon={<InfoCircleOutlined />} content="版本信息"/>
            </div>
        );
    }
}