import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSkill } from "../../redux/skill/skillSlice";

export default function SkillButton({ text, setTitle }) {
    const initialValue = {
        key: Math.random(),
        skill: text,
        level: "",
    };
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addSkill(initialValue));
    };
    useEffect(() => {
        setTitle(text);
    }, [text]);
    return (
        <Button
            onClick={handleAdd}
            type="primary"
            className="flex items-center justify-center bg-[#eff2f9] text-[#132532] hover:!bg-[#eaf6ff] hover:!text-[#1a91f0]"
        >
            {text} <PlusOutlined />
        </Button>
    );
}
