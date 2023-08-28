import React, { useState } from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const ModalDelete = ({ onDelete, loading }) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <Button
                icon={<DeleteOutlined />}
                className="flex justify-center items-center w-full "
                type="text"
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                }}
            >
                Delete
            </Button>
            {open && (
                <Modal
                    title="Confirm delete !"
                    centered
                    open={open}
                    footer={
                        <>
                            <Button onClick={onDelete} loading={loading}>
                                Delete
                            </Button>
                            <Button
                                className="bg-[#1677ff]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpen(false);
                                }}
                                type="primary"
                            >
                                Cancle
                            </Button>
                        </>
                    }
                >
                    <p>Are you sure you want to delete this entry?</p>
                </Modal>
            )}
        </div>
    );
};
export default ModalDelete;
