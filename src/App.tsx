import './App.css';
import SimpleLayout from './layouts/SimpleLayout';
import { Tabs, Typography, Button, Image} from 'antd';
import RegistrationForm from './components/RegistrationForm'
import { useRef } from 'react';

const { TabPane } = Tabs;
const { Text } = Typography;
const { Title } = Typography;

function App() {
  const header = <div>
    <h1 className='title'>EQPC</h1>
    <Text type="secondary">Каталог оборудования</Text>
  </div>;
  const footer = <div>
    <Text type="secondary">EQPC ©2021</Text>
    <Button shape="circle">?</Button>
  </div> 


  return (
    <div className="App">
      <SimpleLayout header={header} footer={footer}>
        <Tabs defaultActiveKey="2">
          <TabPane tab="Вход в систему" key="1">
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
