import ResumeBuilder from "./components/resume-builder/ResumeBuilder";
import Resume from "./pages/resume/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Resume />} />
                    <Route path="/watch" element={<ResumeBuilder />} />
                    <Route path="/*" element={<>Not found</>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
