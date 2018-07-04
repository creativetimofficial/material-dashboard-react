// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Code from "@material-ui/icons/Code";
import Add from "@material-ui/icons/Add";
import Event from "@material-ui/icons/Event";
import Person from "@material-ui/icons/Person";
import Whatshot from "@material-ui/icons/Whatshot";
// core components/views

import HackathonDash from "views/HackathonDash/HackathonDash.jsx";
import ExploreHack from "views/ExploreHack/ExploreHack.jsx";
import AddEvent from "views/AddEvent/AddEvent.jsx";
import TeamRegistration from "views/TeamRegistration/TeamRegistration.jsx";
import EventDash from "views/EventDash/EventDash.jsx";
import Labs from "views/Labs/Labs.jsx";
import Login from "layouts/Login/Login.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";

const dashboardRoutes = [
  {
    path: "/hack-dashboard",
    sidebarName: "Hackathons",
    navbarName: "The only place where you can hack during office hours",
    icon: Dashboard,
    component: HackathonDash
  },
  {
    path: "/login",
    sidebarName: "Hackathons",
    hidden: true,
    navbarName: "The only place where you can hack during office hours",
    icon: Dashboard,
    component: Login
  },
  {
    path: "/add-event",
    sidebarName: "Add Event",
    navbarName: "The only place where you can hack during office hours",
    icon: Add,
    component: AddEvent
  },
  {
    path: "/hackathon/:hackId",
    sidebarName: "Hackathon",
    navbarName: "The only place where you can hack during office hours",
    icon: Whatshot,
    hidden: true,
    component: ExploreHack
  },
  {
    path: "/event-dash/:eventId",
    sidebarName: "Event Dash",
    navbarName: "The only place where you can hack during office hours",
    icon: Event,
    hidden: true,
    component: EventDash
  },
  {
    path: "/participate/:hackId",
    sidebarName: "Registration",
    navbarName: "The only place where you can hack during office hours",
    icon: Code,
    hidden: true,
    component: TeamRegistration
  },
  {
    path: "/labs",
    sidebarName: "Labs",
    navbarName: "The only place where you can hack during office hours",
    icon: Code,
    component: Labs
  },
  {
    path: "/profile",
    sidebarName: "Profile",
    navbarName: "User Profile",
    icon: Person,
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
];

export default dashboardRoutes;
