import React,{useState} from 'react'
import '../css/style.css'

import Menu from './Menu.js';

export default function Hamburger() {
    const [menu,setMenu] = useState(false);

    return (     
        <div>
            <svg width="24" height="18" onClick={()=>setMenu(!menu)} className={menu ? 'hamburger-active' : 'hamburger'}  xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
            
            {menu && <Menu/>}
        </div>
    )
}
