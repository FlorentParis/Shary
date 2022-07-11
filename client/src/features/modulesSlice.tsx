import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import usePostModules from '../hooks/usePostModules';
import usePostModulesChat from '../hooks/usePostModulesChat';
import usePostModulesFeuDArtifice from '../hooks/usePostModulesFeuDArtifice';
import usePostModulesFresque from '../hooks/usePostModulesFresque';
import usePostModulesLivreDOr from '../hooks/usePostModulesLivreDOr';
import usePostModulesPhotosVideos from '../hooks/usePostModulesPhotosVideos';
import usePostModulesPlaylist from '../hooks/usePostModulesPlaylist';


const initialState = {
  };

  /*CHAT / PHOTOS VIDEOS*/

export const activeModule = createAsyncThunk('modules/activeModule', async(formModule:any) => {
    const updateModule = usePostModules();
    updateModule(formModule);
    console.log(formModule);
})

export const activeModuleSlicePhotosVideos = createAsyncThunk('modules/activeModulePhotosVideos', async(formModulePhotosVideos:any) => {
  const updateModulePhotosVideos = usePostModulesPhotosVideos();
  updateModulePhotosVideos(formModulePhotosVideos);
  console.log(formModulePhotosVideos);
})

export const activeModuleSliceChat = createAsyncThunk('modules/activeModuleChat', async(formModuleChat:any) => {
  const updateModuleChat = usePostModulesChat();
  updateModuleChat(formModuleChat);
  console.log(formModuleChat);
})

export const activeModuleSliceLivreDOr = createAsyncThunk('modules/activeModuleLivreDOr', async(formModuleLivreDOr:any) => {
  const updateModuleLivreDOr = usePostModulesLivreDOr();
  updateModuleLivreDOr(formModuleLivreDOr);
  console.log(formModuleLivreDOr);
})

export const activeModuleSliceFresque = createAsyncThunk('modules/activeModuleFresque', async(formModuleFresque:any) => {
  const updateModuleFresque = usePostModulesFresque();
  updateModuleFresque(formModuleFresque);
  console.log(formModuleFresque);
})


export const activeModuleSliceFeuDArtifice = createAsyncThunk('modules/activeModuleFeuDArtifice', async(formModuleChat:any) => {
  const updateModuleFeuDArtifice = usePostModulesFeuDArtifice();
  updateModuleFeuDArtifice(formModuleChat);
  console.log(formModuleChat);
})

export const activeModuleSlicePlaylist = createAsyncThunk('modules/activeModulePlaylist', async(formModulePlaylist:any) => {
  const updateModulePlaylist = usePostModulesPlaylist();
  updateModulePlaylist(formModulePlaylist);
  console.log(formModulePlaylist);
})

const modulesSlice = createSlice({
  name: 'modules',
  initialState: initialState, 
  reducers: {
    addModules: (state, {payload}) => {
      state = payload
    },
   
  }
})

  export const { addModules } = modulesSlice.actions
  export const getAllModules = (state: any) => state.modules
  
  export default modulesSlice.reducer;