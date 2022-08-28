import { LockFilled, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './RegistrationForm.css'

export default function RegistrationForm () { 
    return(
        <Form>
            <Form.Item><Input className='form-item' placeholder="Адрес электронной почты" prefix={<UserOutlined />} /></Form.Item>
            <Form.Item><Input.Password className='form-item' placeholder="Введите пароль" prefix={<LockFilled />} /></Form.Item>
            <Form.Item><Input.Password className='form-item' placeholder="Подтвердите пароль" prefix={<LockFilled />} /></Form.Item>
            <Form.Item><Button className='form-item button' type='primary' size='large'>Зарегистироваться</Button></Form.Item>
        </Form>
)}
