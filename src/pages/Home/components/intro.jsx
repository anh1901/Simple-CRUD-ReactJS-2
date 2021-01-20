import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import React, { Component } from "react";
import { SmileOutlined, SmileFilled } from "@ant-design/icons";
import { Divider } from "antd";
export class Intro extends Component {
  render() {
    return (
      <>
        <Title strong level={2}>
          Introduction
        </Title>
        <Paragraph
          copyable={{
            icon: [
              <SmileOutlined key="copy-icon" />,
              <SmileFilled key="copied-icon" />,
            ],
            tooltips: ["click here", "you clicked!!"],
          }}
        >
          JustDoIt is an web which help to manage your to-do list.
          <Divider/>
        </Paragraph>
        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>
          He heard the loud impact before he ever saw the result. It had been so
          loud that it had actually made him jump back in his seat. As soon as
          he recovered from the surprise, he saw the crack in the windshield. It
          seemed to be an analogy of the current condition of his life. Sleeping
          in his car was never the plan but sometimes things don't work out as
          planned. This had been his life for the last three months and he was
          just beginning to get used to it. He didn't actually enjoy it, but he
          had accepted it and come to terms with it. Or at least he thought he
          had. All that changed when he put the key into the ignition, turned it
          and the engine didn't make a sound.
          -some story-
        </Paragraph>
      </>
    );
  }
}

export default Intro;
