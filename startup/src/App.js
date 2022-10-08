import './App.css';
import MyCards from './Components/cards/MyCards';
import CardContextProvider from "./Context/CardContext";
function App() {
  return (
    
    <div className="App">
      <CardContextProvider> 
     <MyCards/>
     </CardContextProvider>
    </div>
  );
}

export default App;
