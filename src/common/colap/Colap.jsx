import React from "react";
import { Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import ColapChildren from "./ColapChildren";

const getItems = (panelStyle) => [
    {
        key: "1",
        label: <b>Not specified</b>,
        children: <ColapChildren />,
        style: panelStyle,
    },
];
export default function Colap() {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#fff",
        borderRadius: token.borderRadiusLG,
        border: "1px solid rgb(231, 234, 244)",
        padding: "15px 0px",
    };
    return (
        <div>
            <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{
                    background: token.colorBgContainer,
                }}
                items={getItems(panelStyle)}
                expandIconPosition="end"
            />
        </div>
    );
}
