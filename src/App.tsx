import './App.css';
import SimpleLayout from './layouts/SimpleLayout';
import { Tabs, Typography, Button, Image } from 'antd';
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm';

const { TabPane } = Tabs;
const { Text } = Typography;

function App() {
  const header = <div>
    <div className='title-block'><img width={40} alt='antd' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/><h1 className='title'>EQPC</h1></div>
    <Text className='subtitle' type="secondary">Каталог оборудования</Text>
  </div>;
  const footer = <div>
    <Text className='footer-text' type="secondary">EQPC ©2021</Text>
    <Button className='circle-button' shape="circle">?</Button>
  </div> 


  return (
    <div className="App">
      <SimpleLayout header={header} footer={footer}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Вход в систему" key="1">
            <LoginForm/>
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
