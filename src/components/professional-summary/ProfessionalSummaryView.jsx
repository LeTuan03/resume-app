import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
export default function ProfessionalSummaryView() {
    const profile = useSelector((state) => state.profile);
    return (
        <div className="mb-3">
            <div className="flex items-center gap-2">
                <UserOutlined /> <p className="font-semibold">Profile</p>
            </div>
            {typeof profile.profile !== "object" && (
                <p
                    className="!text-[10px] ml-5 break-all"
                    dangerouslySetInnerHTML={{ __html: profile }}
                ></p>
            )}
        </div>
    );
}
