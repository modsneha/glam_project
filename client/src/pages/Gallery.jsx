import { useState } from 'react';
import Images from '../components/Images';
import Videos from '../components/Videos';
import Facilities from '../components/Facilities';

const Gallery = () => {

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <span className="container flex flex-col justify-center items-center py-8 px-4 h-screen bg-[url('./assets/CourseBg.jpg')] bgImg mx-auto">
      <span>
        <div className="flex justify-center items-center mb-5 mx-auto text-textColor gap-5 w-full text-center">
          <div className='px-20'>
            <button onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'text-2xl text-primaryColor border-b-2 border-b-primaryColor' : 'text-xl hover:text-primaryColor hover:border-b-2 hover:border-b-primaryColor'}>
              Images
            </button>
          </div>
          <div className='px-20'>
            <button onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'text-2xl text-primaryColor border-b-2 border-b-primaryColor' : 'text-xl hover:text-primaryColor hover:border-b-2 hover:border-b-primaryColor'}>
              Videos
            </button>
          </div>
          <div className='px-20'>
            <button onClick={() => handleTabClick('tab3')} className={activeTab === 'tab3' ? 'text-2xl text-primaryColor border-b-2 border-b-primaryColor' : 'text-xl hover:text-primaryColor hover:border-b-2 hover:border-b-primaryColor'}>
              Facilities
            </button>
          </div>
        </div>
        <div className='flex justify-center items-center mb-5 mx-auto text-white gap-5 w-full'>
          {activeTab === 'tab1' && <Images />}
          {activeTab === 'tab2' && <Videos />}
          {activeTab === 'tab3' && <Facilities />}
        </div>
      </span>
    </span>
  )
}

export default Gallery;