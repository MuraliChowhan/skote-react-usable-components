import React from "react"
import { Redirect } from "react-router-dom"
// User profile
import UserProfile from "../pages/Authentication/UserProfile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Bookings from "pages/Bookings/Bookings"
import Orders from "pages/Orders/Order"
import Plan from "pages/Plan/Plan"
import Subscriptions from "pages/Subscriptions/Subscriptions"
import Settings from "pages/Settings/Settings"
import Teams from "pages/Teams/Teams"
import Requests from "pages/Requests/Requests"
import Infrastructure from "pages/CientAdmin/Infrastructure"
import Reservation from "pages/ClientStaff/Reservation/Reservation"
import Roles from "pages/Settings/Roles/Roles"
import ClientStaffChat from "pages/ClientStaff/Reservation/ClientStaffChat"
// import Tasks from "pages/Chat/tasks"
import TopbarTasks from "pages/Tasks/Tasks"
import Calendar from "pages/Calendar"
import Finance from "pages/Finance/Finance"
import PushNotification from "pages/PushNotification/PushNotification"
import ContactDetails from "pages/Contacts/Contacts"
import Chat from "pages/Chat/Chat"
import Appointments from "pages/Appointments/Appointments"
import ClientsTable from "pages/Clients/Client"
import TaskDetails from "pages/Dashboard/TaskDetails"
import AddCoupons from "pages/Finance/AddCoupons"
import TaskModal from "pages/Createnew/TaskModal"
import LeadModal from "pages/Createnew/LeadModal"
import NewClient from "pages/Createnew/NewClinet"
import Invoices from "store/invoices/reducer"
import Invoice from "pages/Createnew/Invocie"
import UserAppointments from "pages/Createnew/UserAppointments"
import { KanbanView } from "pages/kanbanview/KanbanView"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: UserProfile },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "/bookings", component: Bookings },
  { path: "/orders", component: Orders },
  { path: "/requests", component: Requests },
  { path: "/plan", component: Plan },
  { path: "/activesubscriptions", component: Subscriptions },
  { path: "/inactivesubscriptions", component: Subscriptions },
  { path: "/settings", component: Settings },
  { path: "/team", component: Teams },
  { path: "/tasks", component: TopbarTasks },
  { path: "/calender", component: Calendar },
  { path: "/reservation", component: Reservation },
  { path: "/finance", component: Finance },
  { path: "/push-notification", component: PushNotification },
  { path: "/contacts", component: ContactDetails },
  { path: "/chat", component: Chat },
  { path: "/appointments", component: Appointments },
  { path: "/client", component: ClientsTable },
  { path: "/taskdetails", component: TaskDetails },
  { path: "/add-coupon", component: AddCoupons },
  { path: "/task-modal", component: TaskModal },
  { path: "/lead-modal", component: LeadModal },
  { path: "/newclient", component: NewClient },
  { path: "/invoice", component: Invoice },
  { path: "/user-appointments", component: UserAppointments },
  { path: "/leads", component: KanbanView },
  
  // Client Admin
  { path: "/infrastructure", component: Infrastructure },
  { path: "/rolesandpermissions", component: Roles },

  // Client Staff
  { path: "/chat", component: ClientStaffChat },
  { path: "/rolesandpermissions", component: Roles },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { authProtectedRoutes, publicRoutes }
