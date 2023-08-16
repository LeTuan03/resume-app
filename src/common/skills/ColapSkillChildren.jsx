import React from "react";
import { Button, Form, Input, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editSkill } from "../../redux/skill/skillSlice";

export default function ColapSkillChildren({ setLevel, setTitle, i }) {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.skill.isShow);
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

    const onFinish = async (e) => {
        e.key = i.key;
        dispatch(editSkill(e));
    };

    return (
        <div>
            <Form layout="vertical" onFinish={onFinish}>
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
                            disabled={show}
                            onChange={handleRate}
                            character={
                                <div className="!h-full text-9xl leading-[0.199]">
                                    ▪
                                </div>
                            }
                        />
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        className="bg-[green] text-white hover:!border-[green] hover:!text-white"
                    >
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
