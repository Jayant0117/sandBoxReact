import React from 'react'
import "./Sidebar.css";
import {BiHeadphone, BiPhone, BiPhoneCall} from "react-icons/bi";
import {FaTags} from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { AiOutlineQuestionCircle,AiOutlineLineChart,AiFillSetting } from "react-icons/ai";
import {Link} from "react-router-dom";


function Sidebar() {
    return (
        <>
        
        <div className="sidebar">
        <Link to="/home"><BiPhone size="3.5rem" className="Biphone" color="grey"/></Link>
        <Link to="/about"><FaTags size="3.5rem" className="Biphone" color="grey"/></Link>
        <Link to="/about"><IoMdDocument size="3.5rem" className="Biphone" color="grey"/></Link>
        <Link to="/home"><AiOutlineQuestionCircle size="3.5rem" className="Biphone" color="grey"/></Link>
        <Link to="/about"><AiOutlineLineChart size="3.5rem" className="Biphone" color="grey"/></Link>
        <Link to="/home"><AiFillSetting  size="3.5rem" className="Biphone" color="grey"/></Link>
        </div>
        </>
    )
}

export default Sidebar
