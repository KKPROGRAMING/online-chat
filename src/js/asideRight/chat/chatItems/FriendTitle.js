import React from "react";
import "../../../../css/asideRight/chat/chatItems/FriendTitle.css";
import UserImg from "../../../common/UserImg";
import Username from "../../../common/Username";
import SignatrueOrMsg from "../../../common/SignatrueOrMsg";
import { Button, Popover, Dropdown, Menu } from "antd";
import { SmileTwoTone, BarsOutlined } from "@ant-design/icons";

export default class FriendTitle extends React.Component {
  render() {
    return (
      <div className="friendTitle">
        <UserImg />
        <div className="friendInfo">
          <Username content="李泽言" />
          <SignatrueOrMsg classname="signatrue" content="不要太想我。" />
        </div>
        <div className="friendOptions">
          <Popover
            placement="bottomRight"
            title="关于好友"
            content="许多人梦中的老公，但不是我的。"
            trigger="hover"
          >
            <Button
              shape="circle"
              size="large"
              icon={<SmileTwoTone />}
            ></Button>
          </Popover>
          <Dropdown
            overlay={
              <Menu
                items={[
                  {
                    key: "1",
                    label: (
                      <Button type="text" block>
                        置顶
                      </Button>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <Button type="text" block>
                        屏蔽
                      </Button>
                    ),
                  },
                  {
                    key: "3",
                    label: (
                      <Button type="text" block danger>
                        删除
                      </Button>
                    ),
                  },
                ]}
              />
            }
            placement="bottomLeft"
            arrow
          >
            <Button size="large" icon={<BarsOutlined />}></Button>
          </Dropdown>
        </div>
      </div>
    );
  }
}
