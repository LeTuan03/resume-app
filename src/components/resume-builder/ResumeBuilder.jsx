import React from "react";
import { Col, Row } from "antd";
import ProfessionalSummaryView from "../professional-summary/ProfessionalSummaryView";
import EmployeeHistoryView from "../employee-history/EmployeeHistoryView";
import EducationView from "../education/EducationView";
import Detail from "../detail/Detail";
import Link from "../links/Link";
import SkillsDetail from "../skills/SkillsDetail";
import DetailView from "../detail/DetailView";

export default function ResumeBuilder() {
    return (
        <div className="bg-white rounded-md absolute p-7 editor blur-[0.5px]">
            <DetailView />
            <Row className="main my-4">
                <Col span={16}>
                    <ProfessionalSummaryView />
                    <EmployeeHistoryView />
                    <EducationView />
                </Col>
                <Col span={8} className="pl-6">
                    <Detail />
                    <Link />
                    <SkillsDetail />
                </Col>
            </Row>
        </div>
    );
}
