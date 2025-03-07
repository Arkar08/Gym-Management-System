import Main from '../layout/Main'
import Booking from '../pages/admin/Booking'
import Class from '../pages/admin/Class'
import Dashboard from '../pages/admin/Dashboard'
import MemberList from '../pages/admin/MemberList'
import MembershipPlan from '../pages/admin/MembershipPlan'
import Profile from '../pages/admin/Profile'
import RevenueReports from '../pages/admin/RevenueReports'
import User from '../pages/admin/User'
import Login from '../pages/auth/Login'
import Logout from '../pages/auth/logout'
import Signup from '../pages/auth/signup'
import Income from '../pages/trainers/Income'
import MyClass from '../pages/trainers/MyClass'
import MySchedule from '../pages/trainers/MySchedule'
import TrainerDashboard from '../pages/trainers/TrainerDashboard'

const data = [
    {
        path:"auth/login",
        text:"Login",
        Component:Login
    },
    {
        path:"auth/signup",
        text:"Signup",
        Component:Signup
    },
    {
        path:"/",
        Component:Main,
        children:[
            {
                path:"dashboard",
                text:'Dashboard',
                Component:Dashboard
            },
            {
                path:"user",
                text:"User",
                Component:User
            },
            {
                path:"class",
                text:"Class",
                Component:Class
            },
            {
                path:"plan",
                text:"Membership Plan",
                Component:MembershipPlan
            },
            {
                path:"memberlist",
                text:"Member Lists",
                Component:MemberList
            },
            {
                path:"report",
                text:"Revenue Report",
                Component:RevenueReports
            },
            {
                path:"logout",
                text:"Logout",
                Component:Logout
            },
            {
                path:"booking",
                text:"Booking",
                Component:Booking
            },
            {
                path:"profile",
                text:"Profile",
                Component:Profile
            },
            {
                path:"trainer/dashboard",
                text:"Dashboard",
                Component:TrainerDashboard
            },
            {
                path:"trainer/myclass",
                text:"My Class",
                Component:MyClass
            },
            {
                path:"trainer/myschedule",
                text:"My Schedule",
                Component:MySchedule
            },
            {
                path:"trainer/income",
                text:"Income",
                Component:Income
            }
        ]
    }
]

export default data;