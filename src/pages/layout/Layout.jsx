import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Spin } from "antd";
export default function Layout() {
    const loading = useSelector((state) => state.loading.loading);
    return (
        <div className="relative">
            <Outlet />
            {/* {loading && (
                <div className="fixed w-full h-full !z-[999] bg-[#2d282870] top-0 items-center flex justify-center">
                    <Spin size="large" tip="Loading" />
                </div>
            )} */}
        </div>
    );
}
