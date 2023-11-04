import React from "react";
import { useSelector } from "react-redux";

export default function UntitledView() {
    const untitled = useSelector((state) => state.untitled);
    return (
        <div>
            {/* {untitled.map (item => (
            <>  

            </>
        ))} */}
            t
        </div>
    );
}
