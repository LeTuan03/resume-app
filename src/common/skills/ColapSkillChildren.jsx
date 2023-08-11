import React from "react";
import { Form, Input, Rate } from "antd";

export default function ColapSkillChildren({ setLevel, setTitle, isShow }) {
    const level = [
        { 1: "Novice" },
        { 2: "Beginer" },
        { 3: "Skillfull" },
        { 4: "Experienced" },
        { 5: "Expert" },
        { 0: "Expert" },
    ];
    const handleRate = (e) => {
        switch (e) {
            case 0:
                setLevel(level[0][5]);
                break;
            case 1:
                setLevel(level[0][1]);
                break;
            case 2:
                setLevel(level[1][2]);
                break;
            case 3:
                setLevel(level[2][3]);
                break;
            case 4:
                setLevel(level[3][4]);
                break;
            case 5:
                setLevel(level[4][5]);
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <Form layout="vertical">
                <div className="grid grid-cols-2 gap-x-10 gap-y-0">
                    <Form.Item
                        name="skill"
                        label={<p className="text-[#828ba2]">Skill</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            onChange={(e) =>
                                setTitle(e.target.value || "(Not specified)")
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        className="flex ds"
                        name="level"
                        label={<p className="text-[#828ba2]">Level - Expert</p>}
                    >
                        <Rate
                            disabled={isShow}
                            onChange={handleRate}
                            character={
                                <div className="!h-full text-9xl leading-[0.199]">
                                    ▪
                                </div>
                            }
                        />
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}
