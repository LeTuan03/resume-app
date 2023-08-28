import React, { useState } from "react";
import { Collapse, theme } from "antd";
import { useSelector } from "react-redux";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";

import ModalDelete from "../delete/ModalDelete";

import EmployeeHistoryChildren from "../../components/employee-history/EmployeeHistoryChildren";
import ColapEducationChildren from "../../components/education/ColapEducationChildren";
import WedAndSocialLinkChildren from "../../components/wed-and-social-link/WedAndSocialLinkChildren";
import SkillChildren from "../../components/skills/SkillChildren";

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
                            <b className="break-all">{title}</b>
                            <p className="text-[#828ba2] break-all">{link}</p>
                            {type === "skill" && !show && level}
                        </div>
                    ),
                    children:
                        type === "education" ? (
                            <ColapEducationChildren setTitle={setTitle} i={i} />
                        ) : type === "link" ? (
                            <WedAndSocialLinkChildren
                                i={i}
                                setTitle={setTitle}
                                setLink={setLink}
                            />
                        ) : type === "skill" ? (
                            <SkillChildren
                                title={title}
                                setTitle={setTitle}
                                i={i}
                                setLevel={setLevel}
                            />
                        ) : (
                            <EmployeeHistoryChildren
                                setTitle={setTitle}
                                i={i}
                            />
                        ),
                    style: panelStyle,
                    extra: (
                        <ModalDelete
                            onDelete={(event) => {
                                event.stopPropagation();
                                handleDelete(i.key);
                            }}
                            type="Colap"
                        />
                    ),
                },
            ]}
            expandIconPosition="end"
        />
    );
}
