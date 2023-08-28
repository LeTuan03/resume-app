import React from "react";
import { ReadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function EducationView() {
    const education = useSelector((state) => state.education.education);
    return (
        <div className="mb-3">
            <div className="flex items-center gap-2">
                <ReadOutlined />
                <p className="font-semibold"> Education</p>
            </div>
            {education &&
                education.map((i) => (
                    <div className="ml-5" key={i.key}>
                        <p className="!text-[10px] font-semibold ">
                            {i.degree}
                            {i.degree && i.school ? ", " : ""}
                            {i.school}
                            {i.city && i.school ? ", " : ""}
                            {i.city}
                        </p>
                        <p className="!text-[9px] text-slate-400">
                            {i.start}
                            {i.end && i.start ? " - " : ""}
                            {i.end}
                        </p>
                        <p
                            className="!text-[10px] break-all"
                            dangerouslySetInnerHTML={{ __html: i.description }}
                        ></p>
                    </div>
                ))}
        </div>
    );
}
