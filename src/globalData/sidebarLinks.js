import { LuLayoutDashboard, LuUser, LuComputer , LuProjector, } from 'react-icons/lu'
import {FaList, FaArrowCircleLeft, FaChartLine, FaFile} from 'react-icons/fa'

export const sidebarData = [
    {
        title: 'dashboard',
        icon: <LuLayoutDashboard size={20} />,
        path: '/dashboard'
    

    },

    {
        title: 'Files',
        icon: <FaFile />,
        path: '/files'
    },

    {
        title: 'Members',
        icon: <LuUser />,
        path: '/employees'
    },

    {
        title: 'projects',
        icon: <LuProjector />,
        path: '/projects'
    },

    {
        title: 'reports',
        icon: <FaChartLine />,
        path: "/reports"
    },

    {
        title: 'Tasks',
        icon: <FaList />,
        path: '/tasks'
    },

    {
        title: 'Monotoring',
        icon: <LuComputer />,
        path: '/monitoring'
    },

    {
        title: 'sign out',
        icon: <FaArrowCircleLeft />,
        path: '/signout'
    },

  

  
]