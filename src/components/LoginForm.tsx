import { LockFilled, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

export default function LoginForm () { 
    return(
        <Form wrapperCol={{ span: 6 }}>
            <Form.Item><Input className='form-item' placeholder="Логин или E-mail" prefix={<UserOutlined />} /></Form.Item>
            <Form.Item><Input.Password className='form-item' placeholder="Введите пароль" prefix={<LockFilled />} /></Form.Item>
            <Form.Item>
                <Checkbox>Запомнить меня</Checkbox></Form.Item><a className='forgot'>Забыли пароль?</a>
            <Form.Item><Button className='form-item button' type='primary' size='large'>Войти</Button></Form.Item>
            <p>Войти с помощью:</p>  
        </Form>
)}
