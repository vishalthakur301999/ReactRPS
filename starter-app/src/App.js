import { GeistProvider, CssBaseline } from '@geist-ui/core'
import Home from './Components/giest';
import HomePage from './Components/home';
import About from './Components/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <GeistProvider>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </BrowserRouter>           
        </GeistProvider>
    )
}

export default App;