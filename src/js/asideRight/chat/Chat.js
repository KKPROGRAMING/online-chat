import React from "react";
import "../../../css/asideRight/chat/Chat.css";
import FriendTitle from "./chatItems/FriendTitle";
import MessageBoard from "./chatItems/MessageBoard";
import Edit from "./chatItems/Edit";

export default class Chat extends React.Component {
    render(){
        return (
            <div className="chat">
                <FriendTitle username="李泽言" signatrue="不要太想我。" classname="signatrue" fire={92}/>
                <MessageBoard/>
                <Edit/>
            </div>
        );
    }
}
