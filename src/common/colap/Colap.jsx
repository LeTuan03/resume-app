import React, { useState } from "react";
import { Collapse, theme } from "antd";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";
import ColapChildren from "./ColapChildren";
import ColapEducationChildren from "./ColapEducationChildren";
import ColapLinkChildren from "../social/ColapLinkChildren";
import ColapSkillChildren from "../skills/ColapSkillChildren";
import { useSelector } from "react-redux";

export default function Colap({ handleDelete, i, type }) {
    const show = useSelector((state) => state.skill.isShow);
    const [title, setTitle] = useState(`( Not specified )`);
    const [level, setLevel] = useState("Expert");
    const [link, setLink] = useState("");
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
                    key: i.key,
                    label: (
                        <div>
                            <b>{title}</b>
                            <p className="text-[#828ba2]">{link}</p>
                            {type === "skill" && !show && level}
                        </div>
                    ),
                    children:
                        type === "education" ? (
                            <ColapEducationChildren setTitle={setTitle} i={i} />
                        ) : type === "link" ? (
                            <ColapLinkChildren
                                i={i}
                                setTitle={setTitle}
                                setLink={setLink}
                            />
                        ) : type === "skill" ? (
                            <ColapSkillChildren
                                title={title}
                                setTitle={setTitle}
                                i={i}
                                setLevel={setLevel}
                            />
                        ) : (
                            <ColapChildren setTitle={setTitle} i={i} />
                        ),
                    style: panelStyle,
                    extra: (
                        <DeleteOutlined
                            className="absolute right-[-30px] top-1 text-xl text-[#cfd6e0] hover:text-[#1677ff]"
                            onClick={(event) => {
                                event.stopPropagation();
                                handleDelete(i.key);
                            }}
                        />
                    ),
                },
            ]}
            expandIconPosition="end"
        />
    );
}
