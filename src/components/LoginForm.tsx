import { LockFilled, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './LoginForm.css'

export default function LoginForm () { 
    return(
        <Form wrapperCol={{ span: 6 }}>
            <Form.Item><Input className='form-item' placeholder="Логин или E-mail" prefix={<UserOutlined style={{color: '#1890ff',}} />} /></Form.Item>
            <Form.Item><Input.Password className='form-item' placeholder="Введите пароль" prefix={<LockFilled style={{color: '#1890ff',}} />} /></Form.Item>
            <div className='form-item line'><Checkbox className='remember'>Запомнить меня</Checkbox><a className='forgot'>Забыли пароль?</a></div>
            <Form.Item><Button className='form-item button' type='primary' size='large'>Войти</Button></Form.Item>
            <p>Войти с помощью:</p>  
        </Form>
)}
