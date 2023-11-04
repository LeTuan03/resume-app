import React from "react";
import PersonalDetails from "../../components/personal-details/PersonalDetails";
import ProfessionalSummary from "../../components/professional-summary/ProfessionalSummary";
import EmployeeHistory from "../../components/employee-history/EmployeeHistory";
import Education from "../../components/education/Education";
import WedAndSocialLink from "../../components/wed-and-social-link/WedAndSocialLink";
import Skills from "../../components/skills/Skills";
import ResumeBuilder from "../../components/resume-builder/ResumeBuilder";
import Selection from "../../components/Selection/Selection";
import Untitled from "../../components/Selection/Untitled";
import { useSelector } from "react-redux";

export default function Resume() {
    const untitled = useSelector((state) => state.untitled);
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="p-12 h-screen overflow-scroll main-left">
                <div className="sc-bTZrxR">
                    <div className="kiNVaO">
                        <img
                            src="https://resume.io/assets/media/Unicorn147be677e621b94dc192.png"
                            alt="Unicorn Image"
                            className="hVKoe"
                        />
                        <div className="kvbwMx">
                            <div className="fxAqSt">
                                Ensure your resume fits the job opening, boost
                                your chances!
                            </div>
                            <div className="gsTZoV">
                                Simply paste the link to the job listing, we'll
                                help you optimize your resume
                            </div>
                        </div>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fQQJis"
                        >
                            <path d="M9.32427537,7.23715414 L10.6757246,5.76284586 L16.6757246,11.2628459 C17.1080918,11.6591824 17.1080918,12.3408176 16.6757246,12.7371541 L10.6757246,18.2371541 L9.32427537,16.7628459 L14.5201072,12 L9.32427537,7.23715414 Z"></path>
                        </svg>
                    </div>
                </div>
                <PersonalDetails />
                <ProfessionalSummary />
                <EmployeeHistory />
                <Education />
                <WedAndSocialLink />
                <Skills />
                {untitled?.map((i) => (
                    <Untitled key={i.key} itemParent={i} />
                ))}
                <Selection />
            </div>
            <div className="bg-[#656e83] h-screen relative flex justify-center items-center ">
                <ResumeBuilder />
            </div>
        </div>
    );
}
