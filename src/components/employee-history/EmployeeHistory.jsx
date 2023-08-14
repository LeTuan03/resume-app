import React, { useState } from "react";
import { Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;

import Colap from "../../common/colap/Colap";

export default function EmployeeHistory() {
    const [number, setNumber] = useState([{ key: Math.random() }]);

    const handleAdd = () => {
        setNumber((prevNumber) => [...prevNumber, { key: Math.random() }]);
    };
    const handleDelete = (id) => {
        const newData = number.filter((i) => i.key !== id);
        setNumber(newData);
    };

    return (
        <div>
            <Title level={4} className="!mb-5">
                Employee History
            </Title>
            {number.map((i) => (
                <Colap key={i.key} id={i.key} handleDelete={handleDelete} />
            ))}
            <Button
                className="w-full border-none text-left mb-3 flex items-center btn-hover"
                icon={<PlusOutlined />}
                type="link"
                onClick={handleAdd}
            >
                <b>Add one more employment</b>
            </Button>
        </div>
    );
}
