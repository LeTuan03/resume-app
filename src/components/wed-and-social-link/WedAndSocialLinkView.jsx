import React from "react";
import { useSelector } from "react-redux";

export default function WedAndSocialLink() {
    const link = useSelector((state) => state.link);
    const firstElement = link[0];
    return (
        <div className="mb-5">
            <>
                {(firstElement?.lable || firstElement?.link) && (
                    <p className="font-semibold">Links</p>
                )}
                <div>
                    {link &&
                        link.map((i, index) => (
                            <a
                                key={index}
                                href={i.link}
                                target="_blank"
                                className="!text-[10px] text-[#2c9bf3] block break-all mb-1"
                            >
                                {i.lable}
                            </a>
                        ))}
                </div>
            </>
        </div>
    );
}
