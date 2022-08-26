import './App.css';
import SimpleLayout from './layouts/SimpleLayout';
import { Tabs, Typography, Button} from 'antd';
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm';

const { TabPane } = Tabs;
const { Text } = Typography;

function App() {
  const header = <div>
    <h1 className='title'>EQPC</h1>
    <Text className='subtitle' type="secondary">Каталог оборудования</Text>
  </div>;
  const footer = <div>
    <Text className='footer-text' type="secondary">EQPC ©2021</Text>
    <Button className='circle-button' shape="circle">?</Button>
  </div> 


  return (
    <div className="App">
      <SimpleLayout header={header} footer={footer}>
        <Tabs defaultActiveKey="2">
          <TabPane tab="Вход в систему" key="1">
            <LoginForm></LoginForm>
          </TabPane>
          <TabPane tab="Регистрация" key="2">
            <RegistrationForm/>
          </TabPane>
        </Tabs> 
      </SimpleLayout>
    </div>
  );
}

export default App;
