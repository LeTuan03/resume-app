import React from "react";
import { ProfileOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function EmployeeHistoryView() {
    const history = useSelector((state) => state.history);
    const firstElement = history[0];
    return (
        <div className="mb-3">
            {(firstElement?.job_title ||
                firstElement?.employer ||
                firstElement?.city ||
                firstElement?.start ||
                firstElement?.end ||
                firstElement?.description) && (
                <div className="flex items-center gap-2">
                    <ProfileOutlined />
                    <p className="font-semibold"> Employment History</p>
                </div>
            )}
            {history &&
                history.map((i) => (
                    <div className="ml-5 mt-1" key={i.key}>
                        <p className="!text-[10px] font-semibold ">
                            {i.job_title} {i.employer && "at " + i.employer}
                            {i.city && ", " + i.city}
                        </p>
                        <p className="!text-[9px] text-slate-400">
                            {i.start}
                            {i.end && i.start ? " - " : ""}
                            {i.end}
                        </p>
                        <p
                            className="!text-[10px] break-all"
                            dangerouslySetInnerHTML={{
                                __html: i.description,
                            }}
                        ></p>
                    </div>
                ))}
        </div>
    );
}
