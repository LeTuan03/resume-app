import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
const { Text } = Typography;
import { DatePicker, Form, Input, Typography } from "antd";

import { editHistory } from "../../redux/history/historySlice";
import formatDate from "../../common/date/FormatDate";

const EmployeeHistoryChildren = ({ setTitle, i }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [content, setContent] = useState("");
    const onFinish = async (e) => {
        e.key = i.key;
        e.start = formatDate(e.start);
        e.end = formatDate(e.end);
        e.description = content;
        setTimeout(() => {
            dispatch(editHistory(e));
        }, 3000);
    };

    return (
        <div>
            <Form layout="vertical" onFinish={onFinish} form={form}>
                <div className="grid grid-cols-2 gap-x-10 gap-y-0">
                    <Form.Item
                        name="job_title"
                        label={<p className="text-[#828ba2]">Job title</p>}
                    >
                        <Input
                            name="job_title"
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            onChange={(e) => {
                                setTitle(e.target.value);
                                form.submit();
                            }}
                            maxLength={50}
                        />
                    </Form.Item>
                    <Form.Item
                        name="employer"
                        label={<p className="text-[#828ba2]">Employer</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="employer"
                            onChange={() => form.submit()}
                        />
                    </Form.Item>
                    <div className="flex gap-4 h-full">
                        <Form.Item
                            name="start"
                            label={
                                <p className="text-[#828ba2]">
                                    Start & End date
                                </p>
                            }
                        >
                            <DatePicker
                                name="start"
                                format="MMM, YYYY"
                                size="large"
                                picker="month"
                                onChange={() => form.submit()}
                            />
                        </Form.Item>
                        <Form.Item name="end" label=" ">
                            <DatePicker
                                name="end"
                                format="MMM, YYYY"
                                size="large"
                                picker="month"
                                onChange={() => form.submit()}
                            />
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="city"
                        label={<p className="text-[#828ba2]">City</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="city"
                            onChange={() => form.submit()}
                        />
                    </Form.Item>
                </div>
                <Form.Item
                    name="description"
                    label={<p className="text-[#828ba2]">Description</p>}
                >
                    <ReactQuill
                        name="description"
                        value={content}
                        onChange={(e) => {
                            setContent(e);
                            form.submit();
                        }}
                        placeholder="e.g Created and implemented lesson plants based on child-led interests and curiosities."
                    />
                    <Text level={4} type="secondary" className="font-semibold">
                        Recruiter tip: write 50-200 characters to increase
                        interview chances
                    </Text>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EmployeeHistoryChildren;
