import './App.css';
import Button  from './components/Button/Button';
import { MyFirstComponent } from '@hg77080/getting-button.my-first-component';

function App() {
  return (
    <div className="App">
      <div style={{width:"100px"}}>

      <MyFirstComponent>HEy!</MyFirstComponent>
      </div>
     <Button label={'Hello'}/>
    </div>
  );
}
 
export default App;