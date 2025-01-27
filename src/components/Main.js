import {Route, Routes} from 'react-router-dom'; 
import Home from './Home'; 
import About from './About';
import Portfolio from './Portfolio';

export default function Main () { 
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='About' element={<About/>}/>
                <Route path='Portfolio' element={<Portfolio/>}/>
            </Routes>     
        </main>
    )
}

