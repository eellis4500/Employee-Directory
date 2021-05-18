import EmployeeAPI from "./Components/EmployeeAPI/EmployeeAPI";
import Heading from "./Components/Heading/Heading";
// import TableHeading from "./Components/TableHeading/TableHeading";
// import api from "./utils/api";
// import './App.css';


function App() {
  return (
    <div className="App">
      <Heading/>
      <EmployeeAPI/>
      <div className="sections"></div>
    </div>
  );
}

export default App;