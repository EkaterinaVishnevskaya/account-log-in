import { LockFilled, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

export interface IRegistrationFormProps {
}

export default function RegistrationForm (props: IRegistrationFormProps) { 
    return(
        <Form wrapperCol={{ span: 6 }}>
            <Form.Item><Input className='form-item' placeholder="Адрес электронной почты" prefix={<UserOutlined />} /></Form.Item>
            <Form.Item><Input.Password className='form-item' placeholder="Введите пароль" prefix={<LockFilled />} /></Form.Item>
            <Form.Item><Input.Password className='form-item' placeholder="Подтвердите пароль" prefix={<LockFilled />} /></Form.Item>
            <Form.Item><Button className='form-item' type='primary'>Зарегистироваться</Button></Form.Item>  
        </Form>
)}
