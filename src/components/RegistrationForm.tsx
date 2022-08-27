import { LockFilled, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

export default function RegistrationForm () { 
    return(
        <Form wrapperCol={{ span: 6 }}>
            <Input className='form-item' placeholder="Адрес электронной почты" prefix={<UserOutlined />} />
            <Input.Password className='form-item' placeholder="Введите пароль" prefix={<LockFilled />} />
            <Input.Password className='form-item' placeholder="Подтвердите пароль" prefix={<LockFilled />} />
            <Button className='form-item button' type='primary' size='large'>Зарегистироваться</Button>
        </Form>
)}
