import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import { DatePicker, Form, Input, Typography } from "antd";
const { Text } = Typography;

import formatDate from "../../common/date/FormatDate";
import { editEducation } from "../../redux/education/educationSlice";
import { setLoading } from "../../redux/loading/loadingSlice";

const ColapEducationChildren = ({ setTitle, i }) => {
    const dispatch = useDispatch();
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [content, setContent] = useState("");
    const [form] = Form.useForm();
    const onFinish = async (e) => {
        e.key = i.key;
        e.start = formatDate(e.start);
        e.end = formatDate(e.end);
        e.description = content;
        dispatch(editEducation(e));
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
                        name="school"
                        label={<p className="text-[#828ba2]">School</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={50}
                        />
                    </Form.Item>
                    <Form.Item
                        name="degree"
                        label={<p className="text-[#828ba2]">Degree</p>}
                    >
                        <Input className="bg-[#eff2f9] border-none py-3 px-4" />
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
                                format="MMM, YYYY"
                                size="large"
                                picker="month"
                            />
                        </Form.Item>
                        <Form.Item name="end" label=" ">
                            <DatePicker
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
                        <Input className="bg-[#eff2f9] border-none py-3 px-4" />
                    </Form.Item>
                </div>
                <Form.Item
                    name="description"
                    label={<p className="text-[#828ba2]">Description</p>}
                >
                    <ReactQuill
                        value={content}
                        onChange={(e) => {
                            setContent(e);
                            form.submit();
                        }}
                        placeholder="e.g Created and implemented lesson plants based on child-led interests and curiosities.
                        "
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

export default ColapEducationChildren;
