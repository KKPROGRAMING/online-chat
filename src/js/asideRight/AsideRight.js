import React from "react";
import "../../css/asideRight/AsideRight.css";
import HeadBar from "./headBar/HeadBar";
import Chat from "./chat/Chat";
import Setting from "./setting/Setting";

export default class AsideRight extends React.Component{
    render(){
        return (
            <div className="asideRight">
                <HeadBar changeStyle={this.props.changeStyle}/>
                <Chat/>
                {/* <Setting/> */}
            </div>
        );
    }
}