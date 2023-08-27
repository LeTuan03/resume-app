import React from "react";
import { Button, Col, Row } from "antd";
import html2canvas from "html2canvas";

import ProfessionalSummaryView from "../professional-summary/ProfessionalSummaryView";
import EmployeeHistoryView from "../employee-history/EmployeeHistoryView";
import EducationView from "../education/EducationView";
import Detail from "../detail/Detail";
import DetailView from "../detail/DetailView";
import SkillsView from "../skills/SkillsView";
import WedAndSocialLink from "../wed-and-social-link/WedAndSocialLinkView";

export default function ResumeBuilder() {
    const downloadSectionAsImage = async (elementId) => {
        const element = document.getElementById(elementId);

        if (element) {
            const canvas = await html2canvas(element);
            const imageUrl = canvas.toDataURL("image/png");

            const link = document.createElement("a");
            link.href = imageUrl;
            link.download = "section.png";
            link.click();
        }
    };
    const handleDownload = async () => {
        await downloadSectionAsImage("download-section");
    };
    return (
        <div>
            <Button
                className="absolute top-3 right-8"
                type="link"
                onClick={handleDownload}
            >
                Download
            </Button>
            <div
                className="bg-white rounded-md absolute p-7 editor pointer-events-none"
                id="download-section"
            >
                <DetailView />
                <Row className="main my-4">
                    <Col span={16}>
                        <ProfessionalSummaryView />
                        <EmployeeHistoryView />
                        <EducationView />
                    </Col>
                    <Col span={8} className="pl-6">
                        <Detail />
                        <WedAndSocialLink />
                        <SkillsView />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
