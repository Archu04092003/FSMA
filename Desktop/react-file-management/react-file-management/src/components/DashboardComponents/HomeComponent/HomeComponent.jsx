import { shallowEqual, useSelector } from "react-redux";
import ShowFolders from "../ShowFolders/ShowFolders";

const HomeComponent = () => {
  const folders = ["New folder", "new folder 2"];

  const { isLoading, userFolders } = useSelector(
    (state) => ({
      isLoading: state.folders.isLoading,
      userFolders: state.folders.userFolders,
    }),
    shallowEqual
  );

  return (
    <div className="col-md-12 w-100">
      {isLoading ? (
        <h1 className="display-1 my-5 text-center">Loading... </h1>
      ) : (
        <>
          <ShowFolders
            title={"Created Folders"}
            type={"folder"}
            folders={userFolders}
          />
        </>
      )}
    </div>
  );
};

export default HomeComponent;
