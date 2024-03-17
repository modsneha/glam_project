// subServiceSlice.js
import { createSlice } from '@reduxjs/toolkit';

import Img1 from '../assets/service_card/Img1.jpg'
import Img2 from '../assets/service_card/Img2.jpg'
import Img3 from '../assets/service_card/Img3.webp'
import Img4 from '../assets/service_card/Img4.jpeg'
import Img5 from '../assets/service_card/Img5.jpg'
import Img6 from '../assets/service_card/Img6.jpg'

export const initialState = {
  services: {
  data: 
    [
      {
        "id": "1",
        "title": "Manicure & Pedicure",
        "images": Img2,
        "subServices": [
          {
            "title": "Manicure & Pedicure",
            "subServices": [
              {
                "title": "Regular herbal Pedicure/Manicure",
                "price": "₹590"
              },
              {
                "title": "Aroma Pedicure/Manicure",
                "price": "₹700"
              },
              {
                "title": "Lotus Pedicure/Manicure",
                "price": "₹800"
              },
              {
                "title": "Crystal Pedicure/Manicure",
                "price": "₹1600"
              },
              {
                "title": "Feet/Hand message",
                "price": "₹300"
              },
              {
                "title": "Nail cut & File",
                "price": "₹70"
              }
            ]
          },
          {
            "title": "Nail Art",
            "subServices": [
              {
                "title": "Gel Polish",
                "price": "499"
              },
              {
                "title": "Temporary Extension",
                "price": "299"
              },
              {
                "title": "Acrylic Extension",
                "price": "999"
              },
              {
                "title": "Gel Extension",
                "price": "1099"
              },
              {
                "title": "Removal",
                "price": "399"
              },
            ]
          },
          {
            "title": "Waxing",
            "subServices": [
              {
                "title": "Normal half Arms/Legs",
                "price": "₹60"
              },
              {
                "title": "Reca Half arms/Legs",
                "price": "₹250"
              },
              {
                "title": "Normal Full Hands/Legs",
                "price": "₹100"
              },
              {
                "title": "Reca Half Hands/Legs",
                "price": "₹350"
              },
              {
                "title": "Normal Underarms",
                "price": "₹50"
              },
              {
                "title": "Reca Underarms",
                "price": "₹100"
              }
            ]
          },
        ]
      },
      {
        "id": "2",
        "title": "Beauty Facial",
        "images": Img1,
        "subServices": [
          {
            "title": "Basic",
            "subServices": [
              {
                "title": "Cleanup",
                "price": "₹399"
              },
              {
                "title": "Fruit facial",
                "price": "₹699"
              },
              {
                "title": "Chocolate facial",
                "price": "₹1199"
              },
              {
                "title": "Whitening Peeloff Mask",
                "price": "₹349"
              },
              {
                "title": "Oxygen facial",
                "price": "₹1399"
              },
              {
                "title": "Herbal Facial",
                "price": "₹899"
              }
            ]
          },
          {
            "title": "Advance",
            "subServices": [
              {
                "title": "Lotus White Glow",
                "price": "₹1099"
              },
              {
                "title": "VLCC AntiTan facial",
                "price": "₹799"
              },
              {
                "title": "Young and Radiant Glow",
                "price": "₹1299"
              },
              {
                "title": "VLCC Skin Tightening facial",
                "price": "₹999"
              },
              {
                "title": "Hydrating facial",
                "price": "₹1399"
              },
              {
                "title": "Diamond facial",
                "price": "₹859"
              }
            ]
          }
        ]
      },
      {
        "id": "3",
        "title": "Bridal Packages",
        "images": Img5,
        "subServices": [
          {
            "title": "Basic",
            "price": "₹9999",
            "subServices": [
              {
                "title": "Makeup HD",
              },
              {
                "title": "1 Cleanup Aroma",
              },
              {
                "title": "1 Facial O3+",
              },
              {
                "title": "Lorea Hair Spa",
              },
              {
                "title": "Full Body Waxing",
              },
              {
                "title": "Full Face Bleach/D-Tan",
              },
              {
                "title": "Threading + Upperlip",
              },
              {
                "title": "ForeHead",
              },
              {
                "title": "Pedicure + Menicure",
              }
            ]
          },
          {
            "title": "Advance",
            "price": "₹12999",
            "subServices": [
              {
                "title": "Makeup HD",
              },
              {
                "title": "1 Cleanup Aroma",
              },
              {
                "title": "1 Facial Lotus",
              },
              {
                "title": "1 Facial O3+",
              },
              {
                "title": "Lorea Hair Spa",
              },
              {
                "title": "Full Body Waxing",
              },
              {
                "title": "Body Polishing",
              },
              {
                "title": "Full Face Bleach/D-Tan",
              },
              {
                "title": "Threading + Upperlip",
              },
              {
                "title": "ForeHead",
              },
              {
                "title": "Pedicure + Menicure",
              }
            ]
          }
        ]
      },
      {
        "id": "4",
        "title": "Hair Spa",
        "images": Img3,
        "subServices": [
          {
            "title": "Hair Cut",
            "subServices": [
              {
                "title": "Basic Haircut",
                "price": "₹150-₹400"
              },
              {
                "title": "Advance Haircut",
                "price": "₹500-₹900"
              },
              {
                "title": "Wash+Basic Haircut+Blow Dry",
                "price": "₹500"
              },
              {
                "title": "Wash+Advance Haircut+Blow Dry",
                "price": "₹1000"
              }
            ]
          },
          {
            "title": "Hair Treatment",
            "subServices": [
              {
                "title": "Hair Dye",
                "price": "₹400"
              },
              {
                "title": "Aqua HairSpa",
                "price": "₹999"
              },
              {
                "title": "Keratin Hair Treatment",
                "price": "₹999"
              },
              {
                "title": "KeraProtein Hair Treatment",
                "price": "₹1199"
              },
              {
                "title": "Smoothening",
                "price": "₹1499"
              },
              {
                "title": "Permanent Hair Straightening",
                "price": "₹3499"
              },
              {
                "title": "Highlight",
                "price": "₹1499-₹2000"
              },
              {
                "title": "Full Hair Color",
                "price": "₹1500-₹2000"
              }
            ]
          }
        ]
      },
      {
        "id": "5",
        "title": "Hairstyle",
        "images": Img6,
        "subServices": [
          {
            "title": "Basic",
            "priceRange": "₹500-₹3000",
            "subServices": [
              {
                "title": "Braided Bun",
                "price": "₹500-₹3000"
              },
              {
                "title": "Fishtail",
                "price": "₹500-₹3000"
              },
              {
                "title": "Freanch",
                "price": "₹500-₹3000"
              },
              {
                "title": "Curls",
                "price": "₹500-₹3000"
              },
            ]
          },
          {
            "title": "Advance",
            "subServices": [
              {
                "title": "Waterfall Hairstyle",
                "price": "₹500-₹3000"
              },
              {
                "title": "Bridal Hairstyle",
                "price": "₹500-₹3000"
              },
              {
                "title": "Sider Hairstyle",
                "price": "₹500-₹3000"
              },
              {
                "title": "International HairStyle",
                "price": "₹500-₹3000"
              },
            ]
          }
        ]
      },
      {
        "id": "6",
        "title": "Makeup",
        "images": Img4,
        "subServices": [
          {
            "title": "Occasion",
            "subServices": [
              {
                "title": "Normal Look",
                "price": "₹1500"
              },
              {
                "title": "HD Makeup Look",
                "price": "₹2500"
              },
              {
                "title": "Nude/Smokey Look",
                "price": "₹2000"
              },
              {
                "title": "Glittery Look",
                "price": "₹2000"
              },
              {
                "title": "Air Brush Makeup",
                "price": "₹7000"
              }
            ]
          },
          {
            "title": "Wedding Season",
            "subServices": [
              {
                "title": "Haldi Look",
                "price": "₹2000-₹3000"
              },
              {
                "title": "Engagement Look",
                "price": "₹2000-₹3000"
              },
              {
                "title": "Sangeet Look",
                "price": "₹2000-₹3000"
              },
              {
                "title": "Cocktail Look",
                "price": "₹2000-₹3000"
              },
              {
                "title": "Reception Look",
                "price": "₹2000-₹3000"
              },
            ]
          }
        ]
      }
    ],
  },
  selectedSubServices: [],
};

export const subServiceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    selectSubService: (state, action) => {
      state.selectedSubServices.push(action.payload);
    },
    deselectSubService: (state, action) => {
      state.selectedSubServices = state.selectedSubServices.filter(
        (subServiceId) => subServiceId !== action.payload
      );
    },
    setServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const { selectSubService, deselectSubService, setServices } = subServiceSlice.actions;

export const selectSelectedSubServices = (state) => state.subService.selectedSubServices;
export const selectServices = (state) => state.service.services;

export default subServiceSlice.reducer;
