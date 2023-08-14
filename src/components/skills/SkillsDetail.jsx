import React from "react";
import { Rate } from "antd";

export default function SkillsDetail() {
    return (
        <div>
            <p className="font-semibold">Skills</p>
            <div>
                <div className="relative mb-3">
                    <p className="!text-[10px]">Javascript</p>
                    <Rate />
                </div>
                <div className="relative mb-3">
                    <p className="!text-[10px]">Python</p>
                    <Rate />
                </div>
                <div className="relative mb-3">
                    <p className="!text-[10px]">Nodejs</p>
                    <Rate />
                </div>
            </div>
        </div>
    );
}
