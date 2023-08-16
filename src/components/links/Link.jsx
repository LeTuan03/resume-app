import React from "react";
import { useSelector } from "react-redux";

export default function Link() {
    const link = useSelector((state) => state.link.link);
    return (
        <div className="mb-5">
            <p className="font-semibold">Links</p>
            <div>
                {link &&
                    link.map((i) => (
                        <a
                            href={i.link}
                            className="!text-[10px] text-[#2c9bf3] block"
                        >
                            {i.lable}
                        </a>
                    ))}
            </div>
        </div>
    );
}
