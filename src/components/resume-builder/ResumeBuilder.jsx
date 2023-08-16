import React from "react";
import { Col, Row } from "antd";
import ProfessionalSummaryView from "../professional-summary/ProfessionalSummaryView";
import EmployeeHistoryView from "../employee-history/EmployeeHistoryView";
import EducationView from "../education/EducationView";
import Detail from "../detail/Detail";
import Link from "../links/Link";
import DetailView from "../detail/DetailView";
import SkillsView from "../skills/SkillsView";

export default function ResumeBuilder() {
    // blur-[0.5px]
    return (
        <div className="bg-white rounded-md absolute p-7 editor pointer-events-none">
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
                    <SkillsView />
                </Col>
            </Row>
        </div>
    );
}
