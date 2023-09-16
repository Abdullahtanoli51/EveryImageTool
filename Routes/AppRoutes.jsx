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
import ConvertToPNG from '../Pages/Convert-to-PNG/Convert-to-PNG';
import ConvertToWEBP from '../Pages/Convert-to-WEBP/Convert-to-WEBP';
import Replacebackground from '../Pages/Replace-Background/ReplaceBackground';
import Resized from '../Pages/Resize/AfterResize';
import CompressSuccessPage from '../Pages/Success';
import SuccessPage from '../Pages/Success';




const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/image-compressor' element={<Compress></Compress>}></Route>
        <Route path='/image-resizer' element={<Resize></Resize>}></Route>
        <Route path='/convert-to-jpg' element={<ConvertToJPG></ConvertToJPG>}></Route>
        <Route path='/crop' element={<CropImage></CropImage>}></Route>
        <Route path='/convert-from-jpg' element={<ConvertFromJPG></ConvertFromJPG>}></Route>
        <Route path='/remove-background' element={<RemoveBackground></RemoveBackground>}></Route>
        <Route path='/watermark-image' element={<WaterMark></WaterMark>}></Route>
        <Route path='/meme-menerator' element={<MemeGernerator></MemeGernerator>}></Route>
        <Route path='/rotate-image' element={<RotateImage></RotateImage>}></Route>
        <Route path='/html-to-image' element={<HtmlToImage></HtmlToImage>}></Route>
        <Route path='/blur-faces' element={<BlurFaces></BlurFaces>}></Route>
        <Route path='/profile-image-maker' element={<ProfileImageMaker></ProfileImageMaker>}></Route>
        <Route path='/photo-edior' element={<PhotoEditor></PhotoEditor>}></Route>
        <Route path='/upscale-image' element={<UpscaleImage></UpscaleImage>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/blog/blog-details' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='/contacts' element={<Contact></Contact>}></Route>
        <Route path='/terms' element={<Terms></Terms>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='convert-to-png' element={<ConvertToPNG></ConvertToPNG>}></Route>
        <Route path='/convert-to-webp' element={<ConvertToWEBP></ConvertToWEBP>}></Route>
        <Route path='/replace-background' element={<Replacebackground></Replacebackground>}></Route>
        <Route path='/success' element={<SuccessPage></SuccessPage>}></Route>
    </Routes>
    </BrowserRouter>
  

    </>
  )
}

export default AppRoutes;