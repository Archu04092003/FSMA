import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const FolderComponent = () => {
  const { folderId } = useParams();

  const { currentFolderData, childFolders } = useSelector(
    (state) => ({
      currentFolderData: state.folders.userFolders.find(
        (folder) => folder.docId === folderId
      ),
      childFolders: state.folders.userFolders.filter(
        (folder) => folder.parent === folderId
      )
    }),
    shallowEqual
  );

  return (
    <div>
      childFolders: {JSON.stringify(childFolders)}
    </div>
  );
};

export default FolderComponent;
