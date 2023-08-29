import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;

import Colap from "../../common/colap/Colap";
import { addHistory, deleteHistory } from "../../redux/history/historySlice";

export default function EmployeeHistory() {
    const history = useSelector((state) => state.history);
    const dispatch = useDispatch();
    const initialValue = {
        key: Math.random(),
        job_title: "",
        employer: "",
        start: "",
        end: "",
        city: "",
        description: "",
    };

    const handleAdd = () => {
        dispatch(addHistory(initialValue));
    };
    const handleDelete = (id) => {
        dispatch(deleteHistory(id));
    };

    return (
        <div>
            <Title level={4} className="!mb-5">
                Employee History
            </Title>
            {history &&
                history.map((i) => (
                    <Colap key={i.key} handleDelete={handleDelete} i={i} />
                ))}
            <Button
                className="w-full border-none text-left mb-3 flex items-center btn-hover"
                icon={<PlusOutlined />}
                type="link"
                onClick={handleAdd}
            >
                <b>Add one more Employment</b>
            </Button>
        </div>
    );
}
