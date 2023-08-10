import React, { useState } from "react";
import ReactQuill from "react-quill";
import { DatePicker, Form, Input, Typography } from "antd";

const { Text } = Typography;

const ColapChildren = () => {
    const [content, setContent] = useState("");
    return (
        <div>
            <Form layout="vertical">
                <div className="grid grid-cols-2 gap-x-10 gap-y-0">
                    <Form.Item
                        name="job_title"
                        label={<p className="text-[#828ba2]">Job title</p>}
                    >
                        <Input className="bg-[#eff2f9] border-none py-3 px-4" />
                    </Form.Item>
                    <Form.Item
                        name="employer"
                        label={<p className="text-[#828ba2]">Employer</p>}
                    >
                        <Input className="bg-[#eff2f9] border-none py-3 px-4" />
                    </Form.Item>
                    <Form.Item
                        name="start"
                        label={
                            <p className="text-[#828ba2]">Start & End date</p>
                        }
                    >
                        <div className="flex gap-4 h-full">
                            <DatePicker
                                format="MMM, YYYY"
                                size="large"
                                picker="month"
                            />
                            <DatePicker
                                format="MMM, YYYY"
                                size="large"
                                picker="month"
                            />
                        </div>
                    </Form.Item>

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
                        onChange={setContent}
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

export default ColapChildren;
