import React from "react";
import { Button, Typography } from "antd";
const { Title, Text } = Typography;

import Colap from "../../common/colap/Colap";
import { useDispatch, useSelector } from "react-redux";
import {
    addEducation,
    deleteEducation,
} from "../../redux/education/educationSlice";
import { PlusOutlined } from "@ant-design/icons";

export default function Education() {
    const initialValue = {
        key: Math.random(),
        school: "",
        degree: "",
        start: "",
        end: "",
        city: "",
        description: "",
    };
    const education = useSelector((state) => state.education.education);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addEducation(initialValue));
    };
    const handleDelete = (id) => {
        dispatch(deleteEducation(id));
    };
    return (
        <div>
            <Title level={4} className="!mb-5">
                Education
            </Title>
            <Text type="secondary" className="font-semibold !my-5 block">
                A varied education on your resume sums up the value that your
                learnings and background will bring to job.
            </Text>
            {education.map((i) => (
                <Colap
                    handleDelete={handleDelete}
                    i={i}
                    type="education"
                    key={i.key}
                />
            ))}
            <Button
                className="w-full border-none text-left mb-3 flex items-center btn-hover"
                icon={<PlusOutlined />}
                type="link"
                onClick={handleAdd}
            >
                <b>Add one more Education</b>
            </Button>
        </div>
    );
}
