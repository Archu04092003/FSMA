import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar";
import SubBar from "../../components/DashboardComponents/SubBar/SubBar";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent";
import CreateFolder from "../../components/DashboardComponents/CreateFolder/CreateFolder";
import {getFolders} from "../../redux/actionCreators/FolderActionCreator";
import FolderComponent from "../../components/DashboardComponents/FolderComponent/FolderComponent";


const Dashboard = () => {
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);

  const { isLoggedIn, isLoading, userId } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.folders.isLoading,
      userId: state.auth.user.uid,
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (isLoading && userId) {
      dispatch(getFolders(userId));
    }
  }, [isLoading, userId, dispatch]);

  return (
    <>
      {isCreateFolderModalOpen && (
        <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      )}

      <Navbar></Navbar>
      <SubBar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      <Routes>
        <Route path="" element={<HomeComponent/>}/>
        <Route path="folder/:folderId" element={<FolderComponent></FolderComponent>}/>
      </Routes>
     
    </>
  );
};

export default Dashboard;
