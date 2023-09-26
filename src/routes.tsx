import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.scss"
import PaginaPadrao from "./components/PaginaPadrao"
import Home from "./pages/Home"
import Vitrine from "./pages/Vitrine"
import NotFound from "./pages/NotFound"
import Modelo from "./pages/Vitrine/Modelo"




function App() {


  return (
    <Router>

      <Routes>

        <Route path="/" element={<PaginaPadrao />}>


          <Route index element={<Home />} />
          <Route path="/vitrine/:id/" element={<Vitrine />} />
          <Route path="/vitrine/modelo/:id/:name" element={<Modelo />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </Router>
  )
}

export default App
