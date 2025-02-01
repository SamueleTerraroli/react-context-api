import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <>
            <header>
                navbar
            </header>
            <main className="container my-5">
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout