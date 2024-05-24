import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/welcome"
import { CustomerNav } from "../components/nav/customerNavBar"

export const CustomerViews = () => {
    return (
    <Routes>
        <Route path="/" element={<><CustomerNav/><Outlet/></>}>
            <Route index element={<Welcome/>}/>
        </Route>

    </Routes>
    )
}