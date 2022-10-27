import React from "react";
import "../../../css/asideRight/setting/Setting.css";
import PersonalSetting from "./settingItems/PersonalSetting";
import SecuritySetting from "./settingItems/SecuritySetting";
import VersionInfo from "./settingItems/VersionInfo";

export default class Setting extends React.Component {
    render(){
        return (
            <div className="setting">
                <PersonalSetting/>
                <SecuritySetting/>
                <VersionInfo/>
            </div>
        );
    }
}
