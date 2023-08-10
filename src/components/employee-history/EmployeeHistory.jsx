import React from "react";
import { Typography } from "antd";
import Colap from "../../common/colap/Colap";
const { Title } = Typography;

export default function EmployeeHistory() {
    return (
        <div>
            <Title level={4} className="!mb-5">
                Employee History
            </Title>
            <Colap />
        </div>
    );
}
