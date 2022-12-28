import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import Aboutus from "../views/aboutUs";
import { NotFoundPage } from "../views/error";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/articles" replace />} />
                <Route path="/articles" element={<App />}></Route>
                <Route path="/academics" element={<App />}></Route>
                <Route path="/spotlight" element={<App />}></Route>
                <Route path="/instilife" element={<App />}></Route>
                <Route path="/opinion" element={<App />} />
                <Route path="/scitech" element={<App />} />
                <Route path="/:id" element={<App />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
