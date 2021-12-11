import { Button, Input, Space } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
    <br/>
    <Space direction='vertical' size={10}>
    <Input placeholder="Input text here" />
    <br/>
    <Button type="primary">Button</Button>
    </Space>
  </div>
  );
}

export default App;
