import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Home/Home';
import Compress from '../Pages/Compress/Compress';
import Resize from '../Pages/Resize/Resize';
import ConvertToJPG from '../Pages/Convert-To-JPG/ConvertToJPG';
import ConvertFromJPG from '../Pages/Convert-From-JPG/ConvertFromJPG';
import RemoveBackground from '../Pages/Remove-Background/RemoveBackGround';
import WaterMark from '../Pages/WaterMarkImage/WaterMark';
import MemeGernerator from '../Pages/Meme_Generator/Meme';
import RotateImage from '../Pages/Rotate-image/Rotate';
import HtmlToImage from '../Pages/Html-to-Image/HtmlToImage';
import BlurFaces from '../Pages/Blur Faces/BlueFaces';
import ProfileImageMaker from '../Pages/ProfileImage-Maker/ProfileImageMaker';
import CropImage from '../Pages/Crop/Crop';
import PhotoEditor from '../Pages/Photo Editor/PhotoEditor';
import UpscaleImage from '../Pages/UpscaleImage/Upscale';
import Blog from '../Pages/Blog/BlogList';
import BlogDetails from '../Pages/Blog/Blog-Details';
import Contact from '../Pages/Contact/Contact';
import Terms from '../Pages/Terms/Terms';
import LoginPage from '../Pages/Login/login';
import Register from '../Pages/Login/Signup';




const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/compress' element={<Compress></Compress>}></Route>
        <Route path='/resize' element={<Resize></Resize>}></Route>
        <Route path='/ConvertToJPG' element={<ConvertToJPG></ConvertToJPG>}></Route>
        <Route path='/Crop' element={<CropImage></CropImage>}></Route>
        <Route path='/Convert-from-jpg' element={<ConvertFromJPG></ConvertFromJPG>}></Route>
        <Route path='/Remove-Background' element={<RemoveBackground></RemoveBackground>}></Route>
        <Route path='/WaterMark' element={<WaterMark></WaterMark>}></Route>
        <Route path='/Meme-Generator' element={<MemeGernerator></MemeGernerator>}></Route>
        <Route path='/RotateImage' element={<RotateImage></RotateImage>}></Route>
        <Route path='/Html-to-Image' element={<HtmlToImage></HtmlToImage>}></Route>
        <Route path='/Blur-Faces' element={<BlurFaces></BlurFaces>}></Route>
        <Route path='/Profile-Image-Maker' element={<ProfileImageMaker></ProfileImageMaker>}></Route>
        <Route path='/Photo-Edior' element={<PhotoEditor></PhotoEditor>}></Route>
        <Route path='/Upscale' element={<UpscaleImage></UpscaleImage>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/blog/blog-details' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='/contacts' element={<Contact></Contact>}></Route>
        <Route path='/terms' element={<Terms></Terms>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  

    </>
  )
}

export default AppRoutes;