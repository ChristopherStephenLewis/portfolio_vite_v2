import './App.css';
import Navbar from './components/common/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
        </>
    );
}

export default App;
