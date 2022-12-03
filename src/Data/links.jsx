import {FiHome} from 'react-icons/fi';
import {GoSearch} from 'react-icons/go'
import {BiLibrary} from 'react-icons/bi';
export const links = [
    {
        name:"Home",
        redirectUrl:"/Home",
        icon:<FiHome/>
    },
    {
        name:"Search",
        redirectUrl:"/Search",
        icon:<GoSearch/>
    },
    {
        name:"Your Library",
        redirectUrl:"/Library",
        icon:<BiLibrary />
    },
]