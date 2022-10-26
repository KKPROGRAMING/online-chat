import React from "react";
import "../../../../css/asideLeft/asideItems/friendList/FriendItem.css";
import UserImg from "../../../common/UserImg";
import Username from "../../../common/Username";
import SignatrueOrMsg from "../../../common/SignatrueOrMsg";
import IfChecked from "../../../common/IfChecked";
import Time from "../../../common/Time";

export default class FriendItem extends React.Component {
    render(){
        return (
            <div className="friendItem">
                <UserImg title={this.props.username} type="userImg" src={this.props.src}/>
                <div className="personalInfo">
                    <Username content={this.props.username}/>
                    <SignatrueOrMsg  classname={this.props.classname} content={this.props.signatrueOrMsg}/>
                </div>
                <div className="check">
                    <IfChecked/>
                    <Time time={new Date().getHours()+':'+new Date().getMinutes()}/>
                </div>
            </div>
        );
    }
}