import React from "react";
import { Progress, Rate } from "antd";
import { useSelector } from "react-redux";

export default function SkillsView() {
    const skills = useSelector((state) => state.skill.skill);
    const show = useSelector((state) => state.skill.isShow);
    const firstElement = skills[0];
    return (
        <div>
            <>
                {(firstElement?.level || firstElement?.skill) && (
                    <p className="font-semibold">Skills</p>
                )}
                <div>
                    {skills &&
                        skills.map((i) => (
                            <div
                                className={!show ? "mb-2" : undefined}
                                key={i.key}
                            >
                                <p className="!text-[10px] relative break-all">
                                    {i.skill}
                                    {i.level && !show && (
                                        <Progress
                                            className="link-progress text-black"
                                            percent={i.level * 20}
                                            showInfo={false}
                                            size={"small"}
                                            strokeWidth={1.5}
                                            strokeLinecap="square"
                                            strokeColor="#2c9bf3"
                                            trailColor="#eff2f9"
                                        />
                                    )}
                                </p>
                            </div>
                        ))}
                </div>
            </>
        </div>
    );
}
