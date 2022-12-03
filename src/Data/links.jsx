import {FiHome} from 'react-icons/fi';
import {GoSearch} from 'react-icons/go'
import {BiLibrary} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa';
import {VscLibrary} from 'react-icons/vsc'
export const links = [
    {
        name:"Home",
        redirectUrl:"Home",
        normalIcon:<FiHome/>,
        activeIcon:<AiFillHome/>
    },
    {
        name:"Search",
        redirectUrl:"Search",
       normalIcon:<GoSearch/>,
       activeIcon:<FaSearch/>
    },
    {
        name:"Your Library",
        redirectUrl:"Your Library",
        normalIcon:<VscLibrary/>,
        activeIcon:<BiLibrary />
        
    },
]