// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    sidebarRTLName: "لوحة القيادة",
    navbarRTLName: "لوحة معلومات المواد",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    sidebarRTLName: "ملف تعريفي للمستخدم",
    navbarRTLName: "الملف الشخصي",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    sidebarName: "Table List",
    sidebarRTLName: "قائمة الجدول",
    navbarRTLName: "قائمة الجدول",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    sidebarRTLName: "طباعة",
    navbarRTLName: "طباعة",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    sidebarRTLName: "الرموز",
    navbarRTLName: "الرموز",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    sidebarRTLName: "خرائط",
    navbarRTLName: "خريطة",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    sidebarRTLName: "إخطارات",
    navbarRTLName: "إخطارات",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    sidebarRTLName: "التطور للاحترافية",
    navbarRTLName: "التطور للاحترافية",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    sidebarName: "RTL Support",
    sidebarRTLName: "پشتیبانی از راست به چپ",
    navbarRTLName: "پشتیبانی از راست به چپ",
    navbarName: "RTL Support",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  }
];

export default dashboardRoutes;
