import React, { useState } from "react";
import { Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import ColapSkillChildren from "./ColapSkillChildren";

export default function ColapSkill({ isShow }) {
    const [level, setLevel] = useState("Expert");
    const [title, setTitle] = useState("(Not specified)");
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#fff",
        borderRadius: token.borderRadiusLG,
        border: "1px solid rgb(231, 234, 244)",
        padding: "15px 0px",
    };
    const getItems = (panelStyle) => [
        {
            key: "1",
            label: (
                <div>
                    <b className="block">{title}</b>
                    {!isShow && level}
                </div>
            ),
            children: (
                <ColapSkillChildren
                    setLevel={setLevel}
                    setTitle={setTitle}
                    isShow={isShow}
                />
            ),
            style: panelStyle,
        },
    ];
    return (
        <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : -90} />
            )}
            style={{
                background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
            expandIconPosition="end"
        />
    );
}
