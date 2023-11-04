import React from "react";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "antd";
import { CheckCircleOutlined, LoadingOutlined } from "@ant-design/icons";

import ProfessionalSummaryView from "../professional-summary/ProfessionalSummaryView";
import EmployeeHistoryView from "../employee-history/EmployeeHistoryView";
import EducationView from "../education/EducationView";
import Detail from "../detail/Detail";
import DetailView from "../detail/DetailView";
import SkillsView from "../skills/SkillsView";
import WedAndSocialLink from "../wed-and-social-link/WedAndSocialLinkView";
import UntitledView from "../Selection/UntitledView";

export default function ResumeBuilder() {
    const loading = useSelector((state) => state.loading.loading);
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
                        {/* <UntitledView /> */}
                    </Col>
                    <Col span={8} className="pl-6">
                        <Detail />
                        <WedAndSocialLink />
                        <SkillsView />
                    </Col>
                </Row>
            </div>
            <div className="absolute bottom-7  text-white">
                {loading ? (
                    <div className="flex items-center gap-3">
                        <LoadingOutlined /> <p>Saving</p>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <CheckCircleOutlined /> <p>Saved</p>
                    </div>
                )}
            </div>
        </div>
    );
}
