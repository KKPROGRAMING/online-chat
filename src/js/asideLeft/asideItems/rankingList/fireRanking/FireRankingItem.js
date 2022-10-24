import React from "react";
import "../../../../../css/asideLeft/asideItems/rankingList/fireRanking/FireRankingItem.css";
import UserImg from "../../../../common/UserImg";
import Username from "../../../../common/Username";


export default class FireRankingItem extends React.Component {
    render(){
        return (
            <div className="fireRankingItem">
                
                <UserImg title={this.props.username} src={this.props.src}/>
                <div className="personalInfo">
                    <Username content={this.props.username}/>
                </div>
            </div>
        );
    }
}