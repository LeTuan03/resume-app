import React, { useState } from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function ProfessionalSummary() {
    const [content, setContent] = useState("");
    return (
        <div className="mb-5">
            <Title level={4}>Professional Summary</Title>
            <Text type="secondary" className="font-semibold !my-5 block">
                Write 2-4 short & energetic sentences to interest the reader!
                Mention your role, experience & most importantly - your biggest
                achievements, best qualities and skills.
            </Text>
            <ReactQuill
                value={content}
                onChange={setContent}
                placeholder="e.g Passionate science teacher with 8+ years of a track of ..."
            />
            <Text level={4} type="secondary" className="font-semibold">
                Recruiter tip: write 50-200 characters to increase interview
                chances
            </Text>
        </div>
    );
}