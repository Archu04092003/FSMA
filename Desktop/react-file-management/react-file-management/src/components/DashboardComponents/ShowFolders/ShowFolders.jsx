import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFolder, faFileAlt} from "@fortawesome/free-solid-svg-icons";
import "./ShowFolders.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/FolderActionCreator";

const ShowFolders = ({title, folders, type}) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDblClick = (folderId)=>{
    if(type === "folder") {
      dispatch(changeFolder(folderId));
      navigate('/dashboard/folder/{folderId}');
    }else {
      alert("File clicked!");
    }
  }
  return (
   <div className="w-100">
   <h4 className="text-center border-bottom">{title} </h4>
   <div className="row gap-2 p-4 flex-wrap">
    {folders.map((folder, index)=>{
      return (
        <p key={index * 55} className="col-md-2  py-3 text-center d-flex flex-column border"
        onDoubleClick={()=> handleDblClick(folder.docId)}
        >
          {type === "folder"? (
            <FontAwesomeIcon icon={faFolder} size="4x" className="mb-3"></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faFileAlt}/>
          )}
          {folder.data.name}</p>
      )
    }
  )}
   </div>
   </div>
  );
};

export default ShowFolders;