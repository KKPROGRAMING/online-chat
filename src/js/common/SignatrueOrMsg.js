import React from "react";
import "../../css/common/SignatrueOrMsg.css";

export default class SignatrueOrMsg extends React.Component {
    render(){
        return (
            <div className={this.props.classname} title={this.props.content}>
                {this.props.content}
            </div>
        );
    }
}