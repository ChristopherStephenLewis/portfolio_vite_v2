import './App.css';
import Navbar from './components/common/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Work />
        </>
    );
}

export default App;
