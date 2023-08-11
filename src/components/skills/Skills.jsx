import React, { useState } from "react";
import { Switch, Typography } from "antd";
import SkillButton from "../../common/skills/SkillButton";
import ColapSkill from "../../common/skills/ColapSkill";
const { Title, Text } = Typography;

export default function Skills() {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <Title level={4} className="!mb-5">
                Skills
            </Title>
            <Text type="secondary" className="font-semibold !my-5 block">
                Choose 5 impotant skills that show you fit the position. Make
                sure they match the key skills mentioned in the job listing
                (special when applying via an online system).
            </Text>
            <div className="flex justify-start gap-4 mb-5">
                <Switch
                    defaultChecked={isShow}
                    className="bg-slate-700"
                    onChange={(e) => setIsShow(e)}
                />
                <Text>Don't show experience level</Text>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
                <SkillButton text="Check text" />
                <SkillButton text="Check text" />
                <SkillButton text="Check text" />
                <SkillButton text="Check text" />
                <SkillButton />
            </div>
            <ColapSkill isShow={isShow} />
        </div>
    );
}
