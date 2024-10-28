import './App.css';
import { carColumnsConfig } from './components/CustomTable/config';
import CustomTable from './components/CustomTable/CustomTable';
import { cars } from './components/CustomTable/data';

function App() {
  return (
    <div className="App">
      <CustomTable data={cars} config={carColumnsConfig} />
    </div>
  );
}

export default App;
