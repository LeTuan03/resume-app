import React, { useCallback, useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
const { Text } = Typography;
import { DatePicker, Form, Input, Typography } from "antd";

import { editHistory } from "../../redux/history/historySlice";
import formatDate from "../../common/date/FormatDate";
import { setLoading } from "../../redux/loading/loadingSlice";

const EmployeeHistoryChildren = ({ setTitle, i }) => {
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [content, setContent] = useState("");
    const onFinish = (e) => {
        e.key = i.key;
        e.start = formatDate(e.start);
        e.end = formatDate(e.end);
        e.description = content;
        dispatch(editHistory(e));
    };
    const handlechange = useCallback(
        (changedFields) => {
            dispatch(setLoading(true));
            if (changedFields && changedFields.length > 0) {
                if (typingTimeout) {
                    clearTimeout(typingTimeout);
                }
                setTypingTimeout(
                    setTimeout(() => {
                        form.submit();
                        dispatch(setLoading(false));
                    }, 2000)
                );
            }
        },
        [typingTimeout]
    );
    const handleChangeQill = useCallback(
        (changedFields) => {
            setContent(changedFields);
            dispatch(setLoading(true));
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
            setTypingTimeout(
                setTimeout(() => {
                    form.submit();
                    dispatch(setLoading(false));
                }, 2000)
            );
        },
        [typingTimeout]
    );
    return (
        <div>
            <Form
                layout="vertical"
                onFinish={onFinish}
                form={form}
                onFieldsChange={handlechange}
            >
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
                            />
                        </Form.Item>
                        <Form.Item name="end" label=" ">
                            <DatePicker
                                name="end"
                                format="MMM, YYYY"
                                size="large"
                                picker="month"
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
                        onChange={handleChangeQill}
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
