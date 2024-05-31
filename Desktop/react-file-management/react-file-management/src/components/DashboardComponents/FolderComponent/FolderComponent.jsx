import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowFolders from "../ShowFolders/ShowFolders";

const FolderComponent = () => {
  const { folderId } = useParams();

  const { currentFolderData, childFolders } = useSelector(
    (state) => ({
      currentFolderData: state.folders.userFolders.find(
        (folder) => folder.docId === folderId
      )?.data,
      childFolders: state.folders.userFolders.filter(
        (folder) => folder.data.parent === folderId
      )
    }),
    shallowEqual
  );

  return (
    <div>
      
      {childFolders.length > 0 ? (
       <>
        <ShowFolders
            title={"Created Folders"}
            type={"folder"}
             
            folders={childFolders}
          />
       </>
      ) : (
        <p className="text-center my-5"> Empty Folder</p>
      )}
    </div>
    
  );
};

export default FolderComponent;
