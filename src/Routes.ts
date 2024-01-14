import { Home, Dashboard, Dropdown } from "./screens";
import { JobInformation, Login, Register } from "./screens/Auth";

const authRoutes = [
    // {
    //     name: "Login",
    //     component: Login
    // },
    {
        name: "Register",
        component: Register
    },
    {
        name: "JobInformation",
        component: JobInformation
    },
    {
        name: "DropdownSearch",
        component: Dropdown
    }
]

const homeRoutes = [
    {
        name: "Home",
        component: Home
    },
    {
        name: "Dashboard",
        component: Dashboard
    }
]

export { authRoutes, homeRoutes };