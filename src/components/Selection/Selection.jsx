import React from "react";
import { Typography } from "antd";
import { Col, Row } from "antd";
import {
    ControlOutlined,
    ReconciliationOutlined,
    RobotOutlined,
    SlackOutlined,
    VerifiedOutlined,
    VideoCameraOutlined,
    WalletOutlined,
} from "@ant-design/icons";
const { Title } = Typography;

export default function Selection() {
    return (
        <div>
            <Title level={4} className="!mb-7">
                Add Section
            </Title>
            <Row gutter={[0, 20]}>
                <Col span={12}>
                    <div className="flex items-center gap-3 text-[#828ba2]">
                        <ControlOutlined className="text-4xl leading-3" />
                        <div className="text-lg">Custom Section</div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="flex items-center gap-3 text-[#828ba2]">
                        <ReconciliationOutlined
                            className="text-4xl
                        leading-3"
                        />
                        <div className="text-lg">Courses</div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="flex items-center gap-3 text-[#828ba2]">
                        <SlackOutlined className="text-4xl leading-3" />
                        <div className="text-lg">
                            Extra-curricular Activiteies
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="flex items-center gap-3 text-[#828ba2]">
                        <WalletOutlined className="text-4xl leading-3" />
                        <div className="text-lg">Interships</div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="flex items-center gap-3 text-[#828ba2]">
                        <RobotOutlined className="text-4xl leading-3" />
                        <div className="text-lg">Hobbies</div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="flex items-center gap-3 text-[#828ba2]">
                        <VerifiedOutlined className="text-4xl leading-3" />
                        <div className="text-lg">Languages</div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="flex items-center gap-3 text-[#828ba2]">
                        <VideoCameraOutlined className="text-4xl leading-3" />
                        <div className="text-lg">References</div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
