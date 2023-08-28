import React, { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { editLink } from "../../redux/link/linkSlice";
import { setLoading } from "../../redux/loading/loadingSlice";

const WedAndSocialLinkChildren = ({ setTitle, i, setLink }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [typingTimeout, setTypingTimeout] = useState(null);
    const onFinish = async (e) => {
        e.key = i.key;
        dispatch(editLink(e));
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
        <Form
            layout="vertical"
            onFinish={onFinish}
            form={form}
            onFieldsChange={handlechange}
        >
            <div className="grid grid-cols-2 gap-x-10 gap-y-0">
                <Form.Item
                    name="lable"
                    label={<p className="text-[#828ba2]">Lable</p>}
                >
                    <Input
                        className="bg-[#eff2f9] border-none py-3 px-4"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="link"
                    label={<p className="text-[#828ba2]">Link</p>}
                >
                    <Input
                        className="bg-[#eff2f9] border-none py-3 px-4"
                        onChange={(e) => setLink(e.target.value)}
                    />
                </Form.Item>
            </div>
        </Form>
    );
};
export default WedAndSocialLinkChildren;
