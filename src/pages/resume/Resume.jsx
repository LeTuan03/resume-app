import React from "react";
import PersonalDetails from "../../components/personal-details/PersonalDetails";
import ProfessionalSummary from "../../components/professional-summary/ProfessionalSummary";
import EmployeeHistory from "../../components/employee-history/EmployeeHistory";
import Education from "../../components/education/Education";
import WedAndSocialLink from "../../components/wed-and-social-link/WedAndSocialLink";
import Skills from "../../components/skills/Skills";
import ResumeBuilder from "../../components/resume-builder/ResumeBuilder";

export default function Resume() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="p-12 h-screen overflow-scroll main-left">
                <PersonalDetails />
                <ProfessionalSummary />
                <EmployeeHistory />
                <Education />
                <WedAndSocialLink />
                <Skills />
            </div>
            <div className="bg-[#656e83] h-screen relative flex justify-center items-center">
                <ResumeBuilder />
            </div>
        </div>
    );
}
