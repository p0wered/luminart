import Header from "./components/Header";
import Home from "./routes/Home";
import About from "./routes/About";
import {Route, Routes} from "react-router";

export default function App() {
    return (
        <>
            <Header/>
            <div className='header-margin'/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}
