import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

export default function SkillButton({ text }) {
    return (
        <Button
            type="primary"
            className="flex items-center justify-center bg-[#eff2f9] text-[#132532] hover:!bg-[#eaf6ff] hover:!text-[#1a91f0]"
        >
            {text || "Comunication Skills"} <PlusOutlined />
        </Button>
    );
}
