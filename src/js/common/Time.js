import React from "react";
import "../../css/common/Time.css";

export default class Time extends React.Component {
    render(){
        return (
            <div className="time">
                {`${new Date().getHours()}:${new Date().getMinutes()}`}
            </div>
        );
    }
}