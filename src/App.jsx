import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import NotFound from "./pages/NotFound"

import { GlobalProvider } from "./context/GlobalContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="posts" Component={PostsPage} />
            <Route path="*" Component={NotFound} />
          </Route>

        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App