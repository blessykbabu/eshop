import {Link} from "react-router-dom";
export default function(){
    return(
        <>
        <div>
        <table className="table border border-white ">
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td  className="p-4">
                    
                    <Link 
                      to="/user/profile"
                      onClick={() => handleLinkClick(<Profile/>)}
                      style={{ textDecoration: "none", color: "black" }}>
                      Profile
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td className="p-4">
                    {" "}
                    <Link 
                      to="/logout" style={{textDecoration:"none",color:"black"}}>
                   
                      Logout
                    </Link>
                  </td>
                </tr>
              
              </tbody>
            </table>
        </div>
        </>
    )
}