import { LockFilled, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

export default function LoginForm () { 
    return(
        <Form wrapperCol={{ span: 6 }}>
            <Input className='form-item' placeholder="Логин или E-mail" prefix={<UserOutlined style={{color: '#1890ff',}} />} />
            <Input.Password className='form-item' placeholder="Введите пароль" prefix={<LockFilled style={{color: '#1890ff',}} />} />
             <Checkbox>Запомнить меня</Checkbox><a className='forgot'>Забыли пароль?</a>
            <Button className='form-item button' type='primary' size='large'>Войти</Button>
            <p>Войти с помощью:</p>  
        </Form>
)}
