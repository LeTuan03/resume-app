import React from "react";
import { Image } from "antd";
import { Col, Row } from "antd";
import { Typography } from "antd";
import ProfessionalSummaryView from "../professional-summary/ProfessionalSummaryView";
import EmployeeHistoryView from "../employee-history/EmployeeHistoryView";
import EducationView from "../education/EducationView";
import Detail from "../detail/Detail";
import Link from "../links/Link";
import SkillsDetail from "../skills/SkillsDetail";

const { Title, Paragraph } = Typography;

export default function ResumeBuilder() {
    return (
        <div className="bg-white rounded-md absolute p-7 editor blur-[0.5px]">
            <div className="flex gap-3 items-center">
                <Image
                    className="rounded"
                    width={50}
                    height={50}
                    src="https://i.pinimg.com/736x/62/6a/54/626a54ed8de30ea0c778cb62c877a9ae.jpg"
                />
                <div className="uppercase">
                    <Title level={5} className="!m-0">
                        LE VAN TUAN
                    </Title>
                    <Paragraph className="!m-0 text-[9px] text-slate-400 ">
                        INTERN REACTJS
                    </Paragraph>
                </div>
            </div>
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
