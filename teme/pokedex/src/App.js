import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Pages
import Home from './pages/home/Home';
import PokemonPage from './pages/pokemonPage/PokemonPage';


function App() {
    return (
        <Router>
            <div className="App">
                <div className='appContainer'>

                    <Routes>

                        <Route exact path='/' element={<Home />} />
                        <Route path='/pokemon/:id' element={<PokemonPage />} />

                    </Routes>

                </div >
            </div >
        </Router>
    );
}

export default App;
