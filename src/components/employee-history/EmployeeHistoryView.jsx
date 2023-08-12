import React from "react";
import { ProfileOutlined } from "@ant-design/icons";

export default function EmployeeHistoryView() {
    return (
        <div className="mb-3">
            <div className="flex items-center gap-2">
                <ProfileOutlined />
                <p className="font-semibold"> Employment History</p>
            </div>
            <div className="ml-5">
                <p className="!text-[10px] font-semibold ">
                    HR at Tuan, Hupuna
                </p>
                <p className="!text-[9px] text-slate-400">
                    February 2023 - March 2023
                </p>
                <p className="!text-[10px]">Content</p>
            </div>
        </div>
    );
}
