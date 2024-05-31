import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { createFolder } from "../../../redux/actionCreators/FolderActionCreator";

const CreateFolder = ({setIsCreateFolderModalOpen}) => {
  const [folderName, setFolderName ]= useState("");
  const [error, setError] = useState("");

  const {userFolders, user, currentFolder, currentFolderData} = useSelector(
    (state) => ({
    userFolders: state.folders.userFolders,
    user: state.auth.user,
    currentFolder: state.folders.currentFolder,
    currentFolderData: state.folders.userFolders.find(folder=> folder.docID ===  state.folders.currentFolder),
  }), shallowEqual);

  const dispatch = useDispatch()

  const checkFolderAlreadyPresent = useCallback((name) => {
  const folderPresent = userFolders.filter((folder)=> folder.data.parent === currentFolder)
  .some((fldr)=> fldr.data.name === name);
    return folderPresent;
  },
 
  );
  
  useEffect(()=>{
    if(folderName && folderName.length <=3){
      setError("Folder name must be at least 3 characters");
    }
    else{
      setError("");
    }
  },[folderName]);

const handleSubmit = (e) => {
  e.preventDefault();

  if (!folderName) {
    setError("Folder name cannot be empty");
    return;
  }

  if (folderName.length <= 3) {
    setError("Folder name must be at least 3 characters");
    return;
  }

  if (checkFolderAlreadyPresent(folderName)) {
    setError("Folder already present");
    return;
  }

  const data = {
    createdAt: new Date(),
    name: folderName,
    userId: user.uid,
    createdBy: user.displayName,
    path: currentFolder === "root" ? [] : (currentFolderData?.data?.path ? [...currentFolderData.data.path, currentFolder] : [currentFolder]),
    parent: currentFolder,
    lastAccessed: null,
    updatedAt: new Date(),
  };

  dispatch(createFolder(data));
  setIsCreateFolderModalOpen(false);
};
  return (
    <div
      className="col-md-12  position-fixed top-0 keft-0 w-100 h-100 "
      style={{ background: "rgba(0, 0, 0.4)", zIndex: 9999 }}
    >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 mt-5 bg-white rounded p-4">
          <div className="d-flex justify-content-between">
            <h4>Create Folder</h4>
            <button
              className="btn"
              onClick={() => setIsCreateFolderModalOpen(false)}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="text-black"
                size="sm"
              />
            </button>
          </div>
          <br />
          
          <div className="d-flex flex-column align-items-center">
            <form className="mt-3 w-100 " onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="folderName"
                  placeholder="Folder Name"
                  value={folderName}
                  onChange={(e)=>setFolderName(e.target.value)}
                />
           

                <br/>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt=5 form-control"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFolder;
