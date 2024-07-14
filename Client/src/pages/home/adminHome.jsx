import { Outlet } from "react-router-dom"
import AdminHeader from "../header/adminHeader"


const adminHome = () => {
    return (
        <div>
            <AdminHeader />
            <Outlet />
        </div>
    )
}

export default adminHome    
