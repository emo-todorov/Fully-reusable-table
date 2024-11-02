import './App.css';
import { carColumnsConfig } from './components/CustomTable/config';
import CustomTable from './components/CustomTable/CustomTable';
import { cars } from './components/CustomTable/data';
import SortingTable from './components/SortingTable/SortingTable';

function App() {
  return (
    <div className="App">
      <CustomTable data={cars} config={carColumnsConfig} />
      <SortingTable data={cars} config={carColumnsConfig} />
    </div>
  );
}

export default App;
