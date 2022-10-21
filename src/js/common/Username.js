import React from "react";
import "../../css/common/Username.css";

export default class Username extends React.Component {
    render(){
        return (
            <div className="username">
                {this.props.content}
            </div>
        );
    }
}