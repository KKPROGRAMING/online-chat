import React from "react";
import "../../../../../css/asideRight/chat/chatItems/friendTitle/FriendOptions.css";
import { Button, Popover, Dropdown, Menu } from "antd";
import { FireTwoTone, BarsOutlined } from "@ant-design/icons";

export default class FriendOptions extends React.Component {
    render(){
        return (
            <div className="friendOptions">
          <Popover
            placement="bottomRight"
            title="亲密度"
            content={`您与${this.props.username}的亲密度为${80}`}
            trigger="hover"
          >
            <Button
              shape="circle"
              size="middle"
              icon={<FireTwoTone />}
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
            trigger="click"
            arrow
          >
            <Button size="middle" icon={<BarsOutlined />}></Button>
          </Dropdown>
        </div>
        );
    }
}