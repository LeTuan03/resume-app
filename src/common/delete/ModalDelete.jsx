import React, { useState } from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const ModalDelete = ({ onDelete, loading, type }) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            {type ? (
                <DeleteOutlined
                    className="absolute right-[-30px] top-1 text-xl text-[#cfd6e0] hover:text-[#1677ff]"
                    onClick={(event) => {
                        event.stopPropagation();
                        setOpen(true);
                    }}
                />
            ) : (
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
            )}
            {open && (
                <Modal
                    title="Confirm delete !"
                    centered
                    open={open}
                    onCancel={(e) => {
                        e.stopPropagation();
                        setOpen(false);
                    }}
                    footer={
                        <div className="text-center mt-8">
                            <Button onClick={onDelete} loading={loading} danger>
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
                                Cancel
                            </Button>
                        </div>
                    }
                >
                    <p>Are you sure you want to delete this entry?</p>
                </Modal>
            )}
        </div>
    );
};
export default ModalDelete;
