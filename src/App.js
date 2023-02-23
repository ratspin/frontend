import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './Component/ShowInfo/Show_Info'
import Test from './Component/Test/Test2'
import NavBar from './Component/NavBar/NavBar'
import Rec from './Component/Rec/Rec'
import Search from './Component/Search/Search'
import Home from './Component/Home/Home'
import Profile from './Component/Profile/Profile'
import Plan from './Component/Plan/Plan'
import Upload from './Component/Upload/Upload'
import SearchError from './Component/Search/SearchError'
import SearchImg from './Component/Search/SearchImg'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/test' element={<Test />} />
          <Route path='/navbar' element={<NavBar />} />
          <Route path='/rec' element={<Rec />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/searchError' element={<SearchError />} />
          <Route path='/searchimg' element={<SearchImg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}