import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { editLink } from "../../redux/link/linkSlice";

const ColapLinkChildren = ({ setTitle, i, setLink }) => {
    const dispatch = useDispatch();
    const onFinish = async (e) => {
        e.key = i.key;
        dispatch(editLink(e));
    };
    return (
        <Form layout="vertical" onFinish={onFinish}>
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
            <Form.Item>
                <Button
                    htmlType="submit"
                    className="bg-[green] text-white hover:!border-[green] hover:!text-white"
                >
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
export default ColapLinkChildren;
