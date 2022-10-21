import React from "react";
import "../../../css/asideLeft/asideItems/FriendList.css";
import FriendItem from "./firendList/FriendItem";

export default class FriendList extends React.Component {
    render(){
        return (
            <div className="friendList">
                <FriendItem/>
                <FriendItem/>
                <FriendItem/>
                <FriendItem/>
                <FriendItem/>
                <FriendItem/>
                <FriendItem/>
                <FriendItem/>
            </div>
        );
    }
}