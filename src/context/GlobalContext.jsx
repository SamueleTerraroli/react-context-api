import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    //inserisco i ati da esportare globalmente

    const baseApiUrl = import.meta.env.VITE_BASE_API_URL
    const [postList, setPostList] = useState([])
    const fetchData = () => {
        axios.get(`${baseApiUrl}/posts`)
            .then(res => {
                setPostList(res.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <GlobalContext.Provider value={{ postList }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }