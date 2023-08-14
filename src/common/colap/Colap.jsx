import React, { useState } from "react";
import { Collapse, theme } from "antd";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";
import ColapChildren from "./ColapChildren";

export default function Colap({ id, handleDelete }) {
    const [title, setTitle] = useState("Not specified");
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#fff",
        borderRadius: token.borderRadiusLG,
        border: "1px solid rgb(231, 234, 244)",
        padding: "15px 0px",
    };
    return (
        <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : -90} />
            )}
            style={{
                background: token.colorBgContainer,
            }}
            items={[
                {
                    key: id,
                    label: <b>{title}</b>,
                    children: <ColapChildren setTitle={setTitle} />,
                    style: panelStyle,
                    extra: (
                        <DeleteOutlined
                            className="absolute right-[-30px] top-1 text-xl text-[#cfd6e0] hover:text-[#1677ff]"
                            onClick={(event) => {
                                event.stopPropagation();
                                handleDelete(id);
                            }}
                        />
                    ),
                },
            ]}
            expandIconPosition="end"
        />
    );
}
