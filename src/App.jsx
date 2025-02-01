import { GlobalProvider } from "./context/GlobalContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App