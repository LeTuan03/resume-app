import React from "react";
import { Typography } from "antd";
import { Image } from "antd";
import { useSelector } from "react-redux";
const { Title, Paragraph } = Typography;
export default function DetailView() {
    const personal = useSelector((state) => state.personal);
    return (
        <div className="flex gap-3 items-center">
            <Image
                className="rounded"
                width={50}
                height={50}
                src="https://i.pinimg.com/736x/62/6a/54/626a54ed8de30ea0c778cb62c877a9ae.jpg"
            />
            <div className="uppercase">
                <Title level={5} className="!m-0">
                    {`${personal.first_name || ""} ${personal.last_name || ""}`}
                </Title>
                <Paragraph className="!m-0 text-[9px] text-slate-400 ">
                    {personal.job_description}
                </Paragraph>
            </div>
        </div>
    );
}
