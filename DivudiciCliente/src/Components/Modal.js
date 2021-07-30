import React from 'react';
import { Modal as AntdModal } from "antd";

export default function Modal(props) {
    const { children, title, isVisible, setIsVisible, width } = props;

    return (
        <AntdModal
            title={title}
            centered
            visible={isVisible}
            onCancel={() => setIsVisible(false)}
            footer={false}
            width={width}
        >
            {children}
        </AntdModal>
    )
}