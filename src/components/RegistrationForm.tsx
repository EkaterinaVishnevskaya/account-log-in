import { Form } from 'antd';
import InputWithIcon from './InputWithIcon';

export interface IRegistrationFormProps {
}

export default function RegistrationForm (props: IRegistrationFormProps) { 
    //const {} = props;
    return(
        <Form>
            <InputWithIcon icon={''}></InputWithIcon>
            <InputWithIcon icon={''}></InputWithIcon>
            <InputWithIcon icon={''}></InputWithIcon>
        </Form>
)}
