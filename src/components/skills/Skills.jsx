import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Switch, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Colap from "../../common/colap/Colap";
import { addSkill, deleteSkill, setShow } from "../../redux/skill/skillSlice";
const { Title, Text } = Typography;

export default function Skills() {
    const show = useSelector((state) => state.skill.isShow);
    const skill = useSelector((state) => state.skill.skill);
    const initialValue = {
        key: Math.random(),
        skill: "",
        level: "",
    };
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addSkill(initialValue));
    };
    const handleDelete = (id) => {
        dispatch(deleteSkill(id));
    };
    const handleShow = () => {
        dispatch(setShow());
    };
    return (
        <div>
            <Title level={4} className="!mb-5">
                Skills for trainee position
            </Title>
            <Text type="secondary" className="font-semibold !my-5 block">
                Choose 5 impotant skills that show you fit the position. Make
                sure they match the key skills mentioned in the job listing
                (special when applying via an online system).
            </Text>
            <div className="flex justify-start gap-4 mb-5">
                <Switch
                    defaultChecked={show}
                    className="bg-slate-700"
                    onChange={handleShow}
                />
                <Text>Don't show experience level</Text>
            </div>
            {skill &&
                skill.map((i) => (
                    <Colap
                        key={i.key}
                        i={i}
                        handleDelete={handleDelete}
                        type="skill"
                    />
                ))}
            <Button
                className="w-full border-none text-left mb-3 flex items-center btn-hover"
                icon={<PlusOutlined />}
                type="link"
                onClick={handleAdd}
            >
                <b>Add one more Education</b>
            </Button>
        </div>
    );
}
