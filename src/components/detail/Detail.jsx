import React from "react";
import { useSelector } from "react-redux";

export default function Detail() {
    const personal = useSelector((state) => state.personal);
    return (
        <div>
            {(personal?.city ||
                personal?.country ||
                personal?.phone ||
                personal?.email ||
                personal?.date_of_birth ||
                personal?.place_of_birth) && (
                <p className="font-semibold">Detail</p>
            )}
            <div className="mb-5">
                <p className="!text-[10px]">{personal?.city}</p>
                <p className="!text-[10px]">{personal?.country}</p>
                <p className="!text-[10px]">{personal?.phone}</p>
                <p className="!text-[10px] text-[#2c9bf3]">{personal?.email}</p>
                <p className="!text-[10px] text-slate-400 mt-3">
                    {personal?.date_of_birth && `Date`}
                    {personal?.date_of_birth && personal?.place_of_birth && "/"}
                    {personal?.place_of_birth && `Place of birth`}
                </p>
                <p className="!text-[10px]">{personal?.date_of_birth}</p>
                <p className="!text-[10px]">{personal?.place_of_birth}</p>
            </div>
        </div>
    );
}
