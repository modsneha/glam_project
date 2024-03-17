import { createSlice } from '@reduxjs/toolkit';

import Img7 from '../assets/details_page/Basic/img1.webp';
import Img5 from '../assets/details_page/Basic/img2.jpg';
import Img1 from '../assets/details_page/Basic/img3.jpeg';
import Img4 from '../assets/details_page/Basic/img4.jpg';
import Img2 from '../assets/details_page/Basic/img5.webp';
import Img6 from '../assets/details_page/Basic/img6.jpeg';
import Img3 from '../assets/details_page/Basic/img7.jpeg';
import Img8 from '../assets/details_page/Basic/img8.webp';

import AImg1 from '../assets/details_page/Advance/img1.jpg'
import AImg2 from '../assets/details_page/Advance/img2.jpeg'    
import AImg3 from '../assets/details_page/Advance/img3.jpeg'
import AImg4 from '../assets/details_page/Advance/img4.jpg'
import AImg5 from '../assets/details_page/Advance/img5.jpg'
import AImg6 from '../assets/details_page/Advance/img6.jpg'
import AImg7 from '../assets/details_page/Advance/img7.jpg'

import HImg1 from '../assets/details_page/Hairstyle/HImg1.jpg'
import BHImg1 from '../assets/details_page/Hairstyle/BHImg1.jpg'
import IHImg1 from '../assets/details_page/Hairstyle/IHImg1.jpeg'
import MHImg1 from '../assets/details_page/Hairstyle/MHImg1.avif'
import SHImg1 from '../assets/details_page/Hairstyle/SHImg1.jpg'

const initialState = [
    {
      id: 1,
      title: 'Basic',
      description: 'Daily wear makeup, Threading, Basic hairstyle, Draping different style sarees',
      registered: false,
      includes: [
        "Daily look",
        "Basic smoky eyes",
        "Threading",
        "Office / casual look",
        "Skin preparation",
        "Choose right foundation",
        "Skin type's",
        "Saree draping",
        "Blending",
      ],
      images: [ Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 ],
      price: 5000,
      Duration: '1 month',
      Timing: '3 days/week (2hrs session)',
      Batches: [
        'Mon : 11 am to 1 pm',
        'THU : 11 am to 1 pm',
        'SAT : 12 pm to 2 pm',
      ],
    },
    {
      id: 2,
      title: 'Advance',
      description: 'Every ocassion makeup and hairstyle which includes bridal makeup too',
      registered: false,
      includes: [
        "Skin analysis",
        "Product knowledge",
        "Different types of foundation",
        "Hi-light and contour",
        "Powder technique",
        "Blush for different face shape",
        "Eye make up for different eye shape",
        "Lip contour & lip shaping",
        "Eyebrow proportion",
        // "eye liner for different eye shape",
        // "Groom makeup",
        // "HD and 3D makeup",
        // "Colour theory",
        // "Bridal makeup",
      ],
      images: [ AImg1, AImg2, AImg3, AImg4, AImg5, AImg6, AImg7 ],
      price: 20000,
      Duration: '2 month',
      Timing: '3 days/week (3hrs session)',
      Batches: [
        'TUE : 2 pm to 5 pm',
        'THU : 3 pm to 6 pm',
        'FRI : 12 pm to 3 pm',
      ],
    },
    {
      id: 3,
      title: 'Hair Style',
      description: 'Maharashtraian, South-indian, Bridal, International, Siders',
      registered: false,
      includes: [
        "Advanced product knowledge",
        "Advanced hair tools knowledge",
        "Extension uses",
        "South indian hairstyle (3 types)",
        "Maharashtraian hairstyle (3 types)",
        "International hairstyle (3 types)",
        "Sider hairstyle (3 types)",
        "Bridal hairstyle (3 types)",
      ],
      images: [ HImg1, MHImg1, IHImg1, SHImg1, BHImg1, ],
      price: 15000,
      Duration: '1.5 month',
      Timing: '3 days/week (3hrs session)',
      Batches: [
        'Mon : 11 am to 2 pm',
        'WED : 12 pm to 3 pm',
        'SAT : 12 pm to 3 pm',
      ],
    },
  ];

const coursePlansSlice = createSlice({
  name: 'coursePlans',
  initialState,
  reducers: {
    setCoursePlans(state, action) {
      return action.payload;
    },
  },
});

export const { setCoursePlans } = coursePlansSlice.actions;

export default coursePlansSlice.reducer;
