import React from "react";
import { Rate } from "antd";
import { useSelector } from "react-redux";

export default function SkillsView() {
    const skills = useSelector((state) => state.skill.skill);
    const show = useSelector((state) => state.skill.isShow);
    return (
        <div>
            <p className="font-semibold">Skills</p>
            <div>
                {skills &&
                    skills.map((i) => (
                        <div className="relative mb-3" key={i.key}>
                            <p className="!text-[10px]">{i.skill}</p>
                            {i.skill && !show && <Rate value={i.level} />}
                        </div>
                    ))}
            </div>
        </div>
    );
}
