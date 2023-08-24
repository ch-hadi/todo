import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/CNavbar';
import Sidebar from './components/Sidebar/Sidebar';
// import SignInSide from './components/SignIn';
function App() {
  return (
    <div>
      <Navbar/>
     <div className='app'>
    
      <Home/>
     </div>
    </div>
  );
}

export default App;
