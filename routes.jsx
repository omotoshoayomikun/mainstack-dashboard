import { ReactComponent as DashboardIcon } from "./src/assets/icons/dashboard.svg"
import { ReactComponent as PenIcon } from "./src/assets/icons/pen.svg"
import { ReactComponent as UsersIcon } from "./src/assets/icons/users.svg"
import { ReactComponent as HourglassIcon } from "./src/assets/icons/hourglass.svg"
import { ReactComponent as CameraIcon } from "./src/assets/icons/camera.svg"
import { ReactComponent as TrashIcon } from "./src/assets/icons/trash.svg"
import { ReactComponent as SubscribeIcon } from "./src/assets/icons/subscribe.svg"
import { ReactComponent as FileIcon } from "./src/assets/icons/file.svg"
import { ReactComponent as ClockIcon } from "./src/assets/icons/clock.svg"

export const routes = [
    {
        icon: <DashboardIcon />,
        title: 'Dashboard',
        link: '#',
        active: true
    },
    {
        icon: <PenIcon />,
        title: 'Item 1',
        link: '#',
    },
    {
        icon: <UsersIcon />,
        title: 'Item 2',
        link: '#',
    },
    {
        icon: <HourglassIcon />,
        title: 'Item 3',
        link: '#',
    },
    {
        icon: <CameraIcon />,
        title: 'Item 4',
        link: '#',
    },
    {
        icon: <TrashIcon />,
        title: 'Item 5',
        link: '#',
    },
    {
        icon: <SubscribeIcon />,
        title: 'Item 6',
        link: '#',
    },
    {
        icon: <FileIcon />,
        title: 'Item 7',
        link: '#',
    },
    {
        icon: <ClockIcon />,
        title: 'Item 8',
        link: '#',
    },

]