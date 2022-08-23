import './App.css';
import { SimpleLayout } from './layouts/SimpleLayout';
import { Tabs, Typography} from 'antd';
import RegistrationForm from './components/RegistrationForm'

const { TabPane } = Tabs;
const { Text } = Typography;
const { Title } = Typography;

function App() {
  const header = <div>
    <img ref='../public/logo.png' alt=''></img>
    <Title className={'header'}>EQPC</Title>
    <Text type="secondary">Каталог оборудования</Text>
  </div>;
  const footer = <Text type="secondary">EQPC ©2021</Text>;


  return (
    <div className="App">
      <SimpleLayout header={header} footer={footer}>
        <Tabs defaultActiveKey="2">
          <TabPane tab="Tab 1" key="1">
            Вход в систему
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Регистрация
          </TabPane>
        </Tabs> 
        <RegistrationForm>

        </RegistrationForm>
      </SimpleLayout>
    </div>
  );
}

export default App;
