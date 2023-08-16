import React from "react";
import { Button, Typography } from "antd";
import ColapSocial from "../../common/social/ColapSocial";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addLink, deleteLink } from "../../redux/link/linkSlice";
import Colap from "../../common/colap/Colap";
const { Title, Text } = Typography;

export default function WedAndSocialLink() {
    const initialValue = {
        key: Math.random(),
        lable: "",
        link: "",
    };
    const link = useSelector((state) => state.link.link);
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addLink(initialValue));
    };
    const handleDelete = (id) => {
        dispatch(deleteLink(id));
    };
    return (
        <div>
            <Title level={4} className="!mb-5">
                Wed & Social Link
            </Title>
            <Text type="secondary" className="font-semibold !my-5 block">
                You can add links to websites you want hiring managers to see!
                Pershap It will be a link to your portfolio, Linkedlin profile,
                or persional website.
            </Text>
            {link.map((i) => (
                <Colap
                    handleDelete={handleDelete}
                    i={i}
                    type="link"
                    key={i.key}
                />
            ))}
            <Button
                className="w-full border-none text-left mb-3 flex items-center btn-hover"
                icon={<PlusOutlined />}
                type="link"
                onClick={handleAdd}
            >
                <b>Add one more Wed & Social Link</b>
            </Button>
        </div>
    );
}
