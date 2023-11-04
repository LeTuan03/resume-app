import React from "react";
import { Button, Input } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
    addChild,
    deleteChild,
    deleteUntitled,
} from "../../redux/untitled/untitledSlice";
import Colap from "../../common/colap/Colap";
export default function Untitled({ itemParent }) {
    const dispatch = useDispatch();
    const handleAddChild = () => {
        dispatch(addChild(itemParent.key));
    };
    const handleDelete = () => {
        dispatch(deleteUntitled(itemParent.key));
    };
    const handleDeleteChild = (keyChild) => {
        dispatch(
            deleteChild({ parentKey: itemParent.key, keyChild: keyChild })
        );
    };
    return (
        <div className="mb-5">
            <div className="relative mb-5">
                <div className="flex items-center input-untitled">
                    <Input
                        className="text-xl w-auto p-0 font-semibold border-none"
                        defaultValue="Untitled"
                    />
                    <EditOutlined className="px-2 hidden icon-untitled" />
                    <DeleteOutlined
                        className="px-2 hidden icon-untitled"
                        onClick={handleDelete}
                    />
                </div>
            </div>
            {itemParent.child &&
                itemParent.child.map((i, index) => (
                    <Colap
                        parentKey={itemParent.key}
                        i={i}
                        key={index}
                        type={"untitled"}
                        handleDelete={handleDeleteChild}
                    />
                ))}
            <Button
                className="w-full border-none text-left mb-3 flex items-center btn-hover"
                icon={<PlusOutlined />}
                type="link"
                onClick={handleAddChild}
            >
                <b>Add one more item</b>
            </Button>
        </div>
    );
}
