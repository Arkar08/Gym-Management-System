import Main from "../layout/Main";
import Booking from "../pages/admin/Booking";
import Class from "../pages/admin/Class";
import Dashboard from "../pages/admin/Dashboard";
import MemberList from "../pages/admin/MemberList";
import MembershipPlan from "../pages/admin/MembershipPlan";
import Profile from "../pages/admin/Profile";
import RevenueReports from "../pages/admin/RevenueReports";
import User from "../pages/admin/User";
import Login from "../pages/auth/Login";
import Logout from "../pages/auth/Logout";
import Signup from "../pages/auth/Signup";
import NotFound from "../pages/notfound/NotFound";
import Income from "../pages/trainers/Income";
import Member from "../pages/trainers/Member";
import MyClass from "../pages/trainers/MyClass";
import MySchedule from "../pages/trainers/MySchedule";
import TrainerDashboard from "../pages/trainers/TrainerDashboard";

const data = [
  {
    path: "auth/login",
    text: "Login",
    element: <Login />,
  },
  {
    path: "auth/signup",
    text: "Signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "dashboard",
        text: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "user",
        text: "User",
        element: <User />,
      },
      {
        path: "class",
        text: "Class",
        element: <Class />,
      },
      {
        path: "plan",
        text: "Membership Plan",
        element: <MembershipPlan />,
      },
      {
        path: "memberlist",
        text: "Member Lists",
        element: <MemberList />,
      },
      {
        path: "report",
        text: "Revenue Report",
        element: <RevenueReports />,
      },
      {
        path: "logout",
        text: "Logout",
        element: <Logout />,
      },
      {
        path: "booking",
        text: "Booking",
        element: <Booking />,
      },
      {
        path: "profile",
        text: "Profile",
        element: <Profile />,
      },
      {
        path: "trainer/dashboard",
        text: "Dashboard",
        element: <TrainerDashboard />,
      },
      {
        path: "trainer/myclass",
        text: "My Class",
        element: <MyClass />,
      },
      {
        path: "trainer/myschedule",
        text: "My Schedule",
        element: <MySchedule />,
      },
      {
        path: "trainer/income",
        text: "Income",
        element: <Income />,
      },
      {
        path: "trainer/member",
        text: "Member",
        element: <Member />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    text: "Not Found",
  },
];

export default data;
