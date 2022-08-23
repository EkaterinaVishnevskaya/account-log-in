import { Input } from 'antd';
import React from 'react';

export interface IInputWithIconProps {
    icon: String
}

export default function InputWithIcon (props: IInputWithIconProps) {
    return (
        <Input placeholder="default size" prefix={props.icon} />
    )
}