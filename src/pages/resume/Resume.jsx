import React from "react";
import PersonalDetails from "../../components/personal-details/PersonalDetails";
import ProfessionalSummary from "../../components/professional-summary/ProfessionalSummary";
import EmployeeHistory from "../../components/employee-history/EmployeeHistory";

export default function Resume() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="p-12 h-screen overflow-scroll main-left">
                <PersonalDetails />
                <ProfessionalSummary />
                <EmployeeHistory />
            </div>
            <div className="bg-[#656e83] h-screen">09</div>
        </div>
    );
}
