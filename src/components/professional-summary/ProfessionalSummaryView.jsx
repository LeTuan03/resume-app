import React from "react";
import { UserOutlined } from "@ant-design/icons";
export default function ProfessionalSummaryView() {
    return (
        <div className="mb-3">
            <div className="flex items-center gap-2">
                <UserOutlined /> <p className="font-semibold">Profile</p>
            </div>
            <p className="!text-[10px] ml-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Libero, necessitatibus itaque eius dolorem maiores dolore
                deserunt placeat optio quo animi reprehenderit corrupti iusto
                hic molestias praesentium repellendus earum, vero esse?
            </p>
        </div>
    );
}
