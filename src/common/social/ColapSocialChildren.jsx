import React from "react";
import { Form, Input } from "antd";

const ColapSocialChildren = () => {
    return (
        <div>
            <Form layout="vertical">
                <div className="grid grid-cols-2 gap-x-10 gap-y-0">
                    <Form.Item
                        name="lable"
                        label={<p className="text-[#828ba2]">Lable</p>}
                    >
                        <Input className="bg-[#eff2f9] border-none py-3 px-4" />
                    </Form.Item>
                    <Form.Item
                        name="link"
                        label={<p className="text-[#828ba2]">Link</p>}
                    >
                        <Input className="bg-[#eff2f9] border-none py-3 px-4" />
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};
export default ColapSocialChildren;
