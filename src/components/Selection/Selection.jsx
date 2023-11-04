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
import { useDispatch } from "react-redux";
import { addUntitled } from "../../redux/untitled/untitledSlice";
const { Title } = Typography;

export default function Selection() {
    const dispatch = useDispatch();
    const handleAddSection = () => {
        dispatch(
            addUntitled({
                key: Math.random(),
                child: [{ keyChild: Math.random(), data: {} }],
            })
        );
    };
    const SELECT = [
        {
            name: "Custom Section",
            icon: <ControlOutlined className="text-4xl leading-3" />,
        },
        {
            name: "Courses",
            icon: <ReconciliationOutlined className="text-4xl leading-3" />,
        },
        {
            name: "Extra-curricular Activiteies",
            icon: <SlackOutlined className="text-4xl leading-3" />,
        },
        {
            name: "Interships",
            icon: <WalletOutlined className="text-4xl leading-3" />,
        },
        {
            name: "Hobbies",
            icon: <RobotOutlined className="text-4xl leading-3" />,
        },
        {
            name: "Languages",
            icon: <VerifiedOutlined className="text-4xl leading-3" />,
        },
        {
            name: "References",
            icon: <VideoCameraOutlined className="text-4xl leading-3" />,
        },
    ];
    const handleAdd = (key) => {
        switch (key) {
            case "Custom Section":
                handleAddSection();
                break;
            case "Courses":
                handleAddSection();
                break;
            case "Extra-curricular Activiteies":
                handleAddSection();
                break;
            case "Interships":
                handleAddSection();
                break;
            case "Hobbies":
                handleAddSection();
                break;
            case "Languages":
                handleAddSection();
                break;
            case "References":
                handleAddSection();
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <Title level={4} className="!mb-7">
                Add Section
            </Title>
            <Row gutter={[0, 20]}>
                {SELECT.map((item, index) => (
                    <Col span={12} key={index}>
                        <div
                            className="flex items-center gap-3 text-[#828ba2]"
                            onClick={() => handleAdd(item.name)}
                        >
                            {item.icon}
                            <div className="text-lg">{item.name}</div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
