import './App.css';
import Navbar from './components/common/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
        </>
    );
}

export default App;
