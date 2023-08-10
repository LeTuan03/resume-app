import React from "react";
import PersonalDetails from "../../components/personal-details/PersonalDetails";

export default function Resume() {
    return (
        <div class="grid grid-cols-2 gap-4">
            <div className="p-12">
                <PersonalDetails />
            </div>
            <div className="bg-[#656e83] h-screen">09</div>
        </div>
    );
}
