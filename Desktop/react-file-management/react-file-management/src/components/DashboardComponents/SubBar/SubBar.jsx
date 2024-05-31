import "./SubBar.css";
import { Link } from "react-router-dom";
const SubBar = ({ setIsCreateFolderModalOpen}) => {
  return (
    
<nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 ">
<nav className="ms-5" aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/Dashboard">Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">New Folder</li>
  </ol>
</nav>
{/* <p className="ms-5">Home</p> */}

<ul className="navbar-nav ms-auto me-5">
  <li className="nav-item mx-2">
 <button className="btn btn-primary" onClick={()=> setIsCreateFolderModalOpen(true)}>
  
 Create Folder
 </button>
 </li>
</ul>
</nav>
  );
};

export default SubBar;