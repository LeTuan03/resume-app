import React from "react";
import { ReadOutlined } from "@ant-design/icons";

export default function EducationView() {
    return (
        <div className="mb-3">
            <div className="flex items-center gap-2">
                <ReadOutlined />
                <p className="font-semibold"> Education</p>
            </div>
            <div className="ml-5">
                <p className="!text-[10px] font-semibold ">
                    Cu nhan, Ha Noi University, Ha Noi
                </p>
                <p className="!text-[9px] text-slate-400">
                    February 2021 - March 2025
                </p>
                <p className="!text-[10px]">
                    Content Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                </p>
            </div>
        </div>
    );
}
