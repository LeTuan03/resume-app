import React, { useState } from "react";
import { Avatar, Form, Input, Typography, Upload, Button } from "antd";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
const { Title } = Typography;

import { add } from "../../redux/personal/personalSlice";
import ModalDelete from "../../common/delete/ModalDelete";
import { debounce } from "lodash";

export default function PersonalDetails() {
    const dispatch = useDispatch();
    const [avata, setAvata] = useState("");
    const [loading, setLoading] = useState(true);

    const onFinish = (value) => {
        value.avata = avata;
        dispatch(add(value));
    };
    const setDebouncedAvata = debounce((file) => {
        setAvata(URL.createObjectURL(file));
        setLoading(false);
    }, 1000);

    const handleBeforeUpload = (file) => {
        setLoading(true);
        setDebouncedAvata(file);
        return false;
    };
    return (
        <div className="mb-5">
            <Title level={4} className="!mb-5">
                Personal Details
            </Title>
            <Form layout="vertical" onFinish={onFinish}>
                <div className="grid grid-cols-2 gap-x-10 gap-y-0">
                    <Form.Item
                        name="job_description"
                        requiredMark={"optional"}
                        label={
                            <p className="text-[#828ba2]">Wanted Job Title</p>
                        }
                        tooltip="Add a title like 'Senior Marketer' or Sales Executive' that quickly describes your overall experience or the type of role you're apply to"
                    >
                        <Input
                            placeholder="e.g Teacher"
                            className="bg-[#eff2f9] border-none py-3 px-4"
                        />
                    </Form.Item>

                    <div className="flex items-center gap-3">
                        {avata && (
                            <img
                                src={avata}
                                alt="Avatar"
                                className="w-[60px] h-[60px] rounded bg-cover"
                            />
                        )}
                        <Upload beforeUpload={handleBeforeUpload}>
                            {!avata ? (
                                <>
                                    <Avatar
                                        shape="square"
                                        size={64}
                                        icon={
                                            <UserOutlined className="text-[#bec4d5] hover:text-[#1a91f0] flex justify-center items-center h-full" />
                                        }
                                        className="bg-[#eff2f9]"
                                    />
                                    <Button
                                        className="border-none text-[#1a91f0] shadow-none"
                                        loading={loading}
                                    >
                                        <b>Upload photo</b>
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <Button
                                            loading={loading}
                                            icon={<EditOutlined />}
                                            className="flex justify-center items-center w-full"
                                            type="text"
                                        >
                                            Edit photo
                                        </Button>
                                    </div>
                                    <ModalDelete
                                        onDelete={(e) => {
                                            e.stopPropagation();
                                            setAvata("");
                                        }}
                                    />
                                </>
                            )}
                        </Upload>
                    </div>

                    <Form.Item
                        name="first_name"
                        label={<p className="text-[#828ba2]">First Name</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="first_name"
                        />
                    </Form.Item>
                    <Form.Item
                        name="last_name"
                        label={<p className="text-[#828ba2]">Last Name</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="last_name"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label={<p className="text-[#828ba2]">Email</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label={<p className="text-[#828ba2]">Phone</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="phone"
                        />
                    </Form.Item>
                    <Form.Item
                        name="country"
                        label={<p className="text-[#828ba2]">Country</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="country"
                        />
                    </Form.Item>
                    <Form.Item
                        name="city"
                        label={<p className="text-[#828ba2]">City</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="city"
                        />
                    </Form.Item>
                    <Form.Item
                        name="place_of_birth"
                        label={<p className="text-[#828ba2]">Place Of Birth</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="place_of_birth"
                        />
                    </Form.Item>
                    <Form.Item
                        name="date_of_birth"
                        requiredMark={"optional"}
                        tooltip="Add the date of birth only if it is a relevant requirement for your position. In most case , leave this blank"
                        label={<p className="text-[#828ba2]">Date Of Birth</p>}
                    >
                        <Input
                            className="bg-[#eff2f9] border-none py-3 px-4"
                            name="date_of_birth"
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
        </div>
    );
}
