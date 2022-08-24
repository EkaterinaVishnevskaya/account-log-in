import { LockFilled, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import InputWithIcon from './InputWithIcon';

export interface IRegistrationFormProps {
}

export default function RegistrationForm (props: IRegistrationFormProps) { 
    return(
        <Form wrapperCol={{ span: 6 }}>
            <Form.Item><Input placeholder="Адрес электронной почты" prefix={<UserOutlined />} /></Form.Item>
            <Form.Item><Input placeholder="Введите пароль" prefix={<LockFilled />} /></Form.Item>
            <Form.Item><Input placeholder="Подтвердите пароль" prefix={<LockFilled />} /></Form.Item>
            <Form.Item><Button type='primary'>Зарегистироваться</Button></Form.Item>  
        </Form>
)}
