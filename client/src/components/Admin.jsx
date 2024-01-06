import React,{useState} from "react";
import { Link } from "react-router-dom";
import profile from "../image/profile.png";
import "./profile-icon.css";
import Icon from "./Icon";
export default function Admin(){
    const [selecteIcon, setSelecteIcon] = useState(null);
    const handleClick = (component) => {
        setSelecteIcon(null); // Reset previous component
        setSelecteIcon(component); // Set the new component
      };
    return(
        <>
    <div>i am admin</div>
    <div className="top-right-div">
           <Link to="/admin/dashboard/icon"
           onClick={() => handleClick(<Icon/>)}><img src={profile}
            />
            </Link>
        </div>
        <div className="top-side">
       {selecteIcon}
        </div>
        </>
    )
}