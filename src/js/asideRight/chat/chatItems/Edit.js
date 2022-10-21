import React from "react";
import "../../../../css/asideRight/chat/chatItems/Edit.css";
import EditBar from "./edit/EditBar";
import EditText from "./edit/EditText";

export default class Edit extends React.Component {
    render(){
        return (
            <div className="edit">
                <EditBar/>
                <EditText/>
            </div>
        );
    }
}
