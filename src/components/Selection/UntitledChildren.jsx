import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import { DatePicker, Form, Input } from "antd";

import { setLoading } from "../../redux/loading/loadingSlice";
import { editChild } from "../../redux/untitled/untitledSlice";
import formatDate from "../../common/date/FormatDate";

export default function UntitledChildren({ setTitle, i, parentKey }) {
    const dispatch = useDispatch();
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [form] = Form.useForm();
    const onFinish = async (e) => {
        e.key = i.key;
        e.start = formatDate(e.start);
        e.end = formatDate(e.end);
        dispatch(editChild({ parentKey, data: e }));
    };
    const handlechange = useCallback(() => {
        dispatch(setLoading(true));
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        form.submit();
        setTypingTimeout(
            setTimeout(() => {
                form.submit();
                dispatch(setLoading(false));
            }, 1)
        );
    }, [typingTimeout]);
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
                        name="untitled"
                        label={
                            <p className="text-[#828ba2]">
                                Activity name, job title, book title etc.
                            </p>
                        }
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={50}
                        />
                    </Form.Item>
                    <Form.Item
                        name="city"
                        label={<p className="text-[#828ba2]">City</p>}
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
                </div>
                <Form.Item
                    name="description"
                    label={<p className="text-[#828ba2]">Description</p>}
                >
                    <ReactQuill
                    // value={content}
                    // onChange={handleChangeQill}
                    />
                </Form.Item>
            </Form>
        </div>
    );
}
