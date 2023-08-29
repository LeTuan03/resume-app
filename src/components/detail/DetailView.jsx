import React from "react";
import { Avatar, Typography } from "antd";
import { Image } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

import isEmptyObject from "../../common/common-function/isEmptyObject";

export default function DetailView() {
    const personal = useSelector((state) => state.personal);
    return (
        <>
            {!isEmptyObject(personal) ? (
                <div className="flex gap-3 items-center">
                    <div>
                        {personal.avata ? (
                            <Image
                                className="rounded"
                                width={50}
                                height={50}
                                src={personal.avata}
                            />
                        ) : (
                            <Avatar
                                shape="square"
                                size={50}
                                icon={<UserOutlined />}
                                className="flex justify-center items-center"
                            />
                        )}
                    </div>
                    <div className="uppercase">
                        <Title level={5} className="!m-0">
                            {`${personal.first_name || ""} ${
                                personal.last_name || ""
                            }`}
                        </Title>
                        <Paragraph className="!m-0 text-[9px] text-slate-400 break-all">
                            {personal.job_description}
                        </Paragraph>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
