import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import SocialMedia from "./pages/SocialMedia";
import GoogleForm from "./pages/GoogleForm";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/social" element={<SocialMedia />} />
          <Route path="/survey" element={<GoogleForm />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
