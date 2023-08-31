import React from "react";
import { Avatar, Typography } from "antd";
import { Image } from "antd";
import { useSelector } from "react-redux";
const { Title, Paragraph } = Typography;

import isEmptyObject from "../../common/common-function/isEmptyObject";

export default function DetailView() {
    const personal = useSelector((state) => state.personal);
    return (
        <>
            {!isEmptyObject(personal) ? (
                <div className="flex gap-3 items-center">
                    {personal.avata && (
                        <Image
                            className="rounded"
                            width={50}
                            height={50}
                            src={personal.avata}
                        />
                    )}
                    <div className="uppercase">
                        <Title level={5}>
                            {`${personal.first_name || ""} ${
                                personal.last_name || ""
                            }`}
                        </Title>
                        <Paragraph className="text-[9px] text-slate-400 break-all">
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
