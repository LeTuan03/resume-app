import React from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;

import Colap from "../../common/colap/Colap";

export default function Education() {
    return (
        <div>
            <Title level={4} className="!mb-5">
                Education
            </Title>
            <Text type="secondary" className="font-semibold !my-5 block">
                A varied education on your resume sums up the value that your
                learnings and background will bring to job.
            </Text>
            <Colap />
        </div>
    );
}
