 
 "use client"
 import React, { useEffect, useMemo, useRef, useState } from "react";
 import { Swiper, SwiperSlide } from "swiper/react";
 import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// import QuantityCounter from "@/uitils/QuantityCounter";
import DestinationSearch from "./DestinationSearch";
import TourCategoryDropdown from "./TourCategoryDropdown";
import GuestDropdown from "./GuestDropdown";
import DateRange from "./DateRange";

// import { Empty, Select, Slider } from 'antd';
import Select from 'react-select'

 SwiperCore.use([ Autoplay, EffectFade, Navigation, Pagination]);

const Home2Banner = () => {
  const defaultPrice = [0, 100000000]
  const [prices, setPrices] = useState([]);
  const [guests, setGuests] = useState('');
  const [type, setType] = useState('');

  const onChange = (value) => {
    setPrices(value)
  }
  const handleSearch = (e) => {
    e.preventDefault();
    // navigate(`/rooms?no_guests=${guests}&type=${type}&from_price=${prices[0]}&to_price=${prices[1]}`);
    // navigate(`/rooms?${guests !== '' ? `no_guests=${guests}` : '' }${type && `&type=${type}`}${prices[0] !== undefined ? `&from_price=${prices[0]}&to_price=${prices[1]}` : '' }`)
    

  };


  const categories = [
    { value: '1', label: 'Houses' },
    { value: '2', label: 'Apartment' },
    { value: '3', label: 'Offices' },
    { value: '4', label: 'Townhome' },
]
const price = [
    { value: '1', label: '500' },
    { value: '1', label: '1000' },
    { value: '2', label: '2000' },
    { value: '3', label: '3000' },
    { value: '4', label: '4000' },
    { value: '5', label: '5000' },
    { value: '6', label: '6000' },
    { value: '7', label: '7000' },
]




  const [index, setIndex] = useState(0);
  const animateTextContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const animateText = () => {
      const animateTextContainer = animateTextContainerRef.current;
      if (!animateTextContainer) return;

      const txts = animateTextContainer.children;
      const txtslen = txts.length;

      for (let i = 0; i < txtslen; i++) {
        txts[i].classList.remove("text-in");
      }
      txts[index].classList.add("text-in");

      if (index === txtslen - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };

    const timeoutId = setTimeout(animateText, 3000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [index]);
    const settings = useMemo(()=>{
        return {
            slidesPerView: "auto",
            speed: 2500,
            spaceBetween: 25,
            effect: 'fade',             // Use the fade effect
            fadeEffect: {
                crossFade: true,           // Enable cross-fade transition
            },
            autoplay: {
                delay: 3000, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".home1-banner-next",
                prevEl: ".home1-banner-prev",
            },
          }
        })
  return (
    <>

      <div className="">

 
{/* 
<div className="home2-banner-content-wrap">



 
<form onSubmit={handleSearch} className='mt-4   shadow-md  p-4 bg-white rounded-2xl '>
              <div className='mb-4 grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center md:divide md:divide-x-2 rtl:md:divide-x-reverse' >
                <div className='flex col-span-3 md:col-span-1 flex-col'>
                  <p className='text-start mb-2 font-medium'>price filter</p>
                  <div className='flex items-center gap-2'>
                    <Slider
                      range
                      className='w-full'
                      onChange={onChange}
                      // defaultValue={[1000 , 3000]}
                      max={parseFloat(2299999)}
                      min={parseFloat(22)}
                      trackStyle={[{ backgroundColor: '#4F46E5' }]}
                      handleStyle={[
                        { borderColor: '#4F46E5', backgroundColor: 'white' },
                        { borderColor: '#4F46E5', backgroundColor: 'white' }
                      ]}
                      railStyle={{ backgroundColor: '#737373' }}
                    />
                  </div>
                </div>
                <div className='flex  flex-col ps-4'>
                  <p className='text-start mb-2 font-medium'>guest filter</p>
                <input 
                  type='number' 
                  className='w-full border-none outline-none py-2 px-1 ' 
                  placeholder="guests filter" 
                  min={1}
                  value={guests}
                  onChange={(e) => setGuests(+e.target.value)} />

                </div>
                <div className='flex  flex-col ps-4'>
                  <p className='text-start mb-2 font-medium'>rooms.filter.type</p>
                  <Select defaultValue="" onChange={(value) => setType(value)}>
                    <Option value="" disabled>rooms.filter.type</Option>
                    <Option value="room">selectType.room</Option>
                    <Option value="suite">selectType.suite</Option>
                    <Option value="poo_view">selectType.pool_view</Option>
                  </Select>
                </div>
              </div>

                <button className='w-full btn btn-primary'>

                room filter
                </button>
            </form>
</div> */}

<div className="home2-banner-area">
  <Swiper {...settings} className="swiper home1-banner-slider">
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide">
        <div className="home2-banner-wrapper" style={{backgroundImage: 'linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img1.jpg)'}}>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="home2-banner-wrapper" style={{backgroundImage: 'linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img2.jpg)'}}>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="home2-banner-wrapper" style={{backgroundImage: 'linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img3.jpg)'}}>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="home2-banner-wrapper" style={{backgroundImage: 'linear-gradient(180deg, rgba(16, 12, 8, 0.4) 0%, rgba(16, 12, 8, 0.4) 100%), url(assets/img/home2/home2-banner-img4.jpg)'}}>
        </div>
      </SwiperSlide>
    </div>
  </Swiper>
  <div className="home2-banner-content-wrap">
    <div className="container">
    <div className="row">
    <div className="col-lg-12">
          <div className="home2-banner-content">
            <div className="eg-tag">
              <span>New York</span>
            </div>
            <h1 className="animate-text" ref={animateTextContainerRef}>Let’s Explore Your
              <span>Holiday</span> 
              <span>Family</span> 
              <span>Honeymoon</span> 
              Trip.</h1>
            
          </div>
        </div>
      </div>
    </div>
    <div className="home1-banner-bottom style-2">
      <div className="container-md container-fluid">
        <div className="filter-wrapper">
       
          <div className="filter-group">
            <div className="tab-content" id="pills-tab2Content">
              <div className="tab-pane fade show active" id="tour" role="tabpanel">
              <div className="home2-banner-content-wrapper">






<div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-sm-0 pt-sm-0">
                        <div className="features-absolute">
                            <ul className="nav nav-pills bg-white shadow border-bottom p-3 flex-row d-md-inline-flex nav-justified mb-0 rounded-top-3 position-relative overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item m-1">
                                    <div className={`${activeIndex === 0 ? 'active' : '' } nav-link py-2 px-4  rounded-3 fw-medium`} to="#" onClick={()=>setActiveIndex(0)} >
                                        Buy
                                    </div>
                                </li>
                                
                                <li className="nav-item m-1">
                                    <div className={`${activeIndex === 1 ? 'active' : '' } nav-link py-2 px-4  rounded-3 fw-medium`} to="#" onClick={()=>setActiveIndex(1)}>
                                        Sell
                                    </div>
                                </li>

                                <li className="nav-item m-1">
                                    <div className={`${activeIndex === 2 ? 'active' : '' } nav-link py-2 px-4  rounded-3 fw-medium`} to="#" onClick={()=>setActiveIndex(2)}>
                                        Rent
                                    </div>
                                </li>
                            </ul>
                            
                            <div className="tab-content bg-white rounded-bottom-3 rounded-end-3 sm-rounded-0 shadow">
                                {activeIndex === 0 ? 
                                    <div className="card border-0 active">
                                        <form className="card-body text-start">
                                            <div className="registration-form text-dark text-start">
                                                <div className="row g-lg-0">
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Search :</label>
                                                            <div className="filter-search-form position-relative filter-border">
                                                                {/* <FiSearch className="fea icon-ex-md icons"/> */}
                                                                <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Select Categories :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                {/* <FiHome className="fea icon-ex-md icons"/> */}
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={categories} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Min Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                {/* <FiDollarSign className="fea icon-ex-md icons"/> */}
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Max Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                {/* <FiDollarSign className="fea icon-ex-md icons"/> */}
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <input type="submit" id="search" name="search" style={{height: '48px'}} className="btn btn-primary searchbtn w-100" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>:''
                                }
                                 {activeIndex === 1 ? 
                                    <div className="card border-0 active">
                                        <form className="card-body text-start">
                                            <div className="registration-form text-dark text-start">
                                                <div className="row g-lg-0">
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Search :</label>
                                                            <div className="filter-search-form position-relative filter-border">
                                                                {/* <FiSearch className="fea icon-ex-md icons"/> */}
                                                                <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Select Categories :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                {/* <FiHome className="fea icon-ex-md icons"/> */}
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={categories} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Min Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                {/* <FiDollarSign className="fea icon-ex-md icons"/> */}
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Max Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                {/* <FiDollarSign className="fea icon-ex-md icons"/> */}
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <input type="submit" id="search" name="search" style={{height: '48px'}} className="btn btn-primary searchbtn w-100" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>:''
                                }
                                 {activeIndex === 2 ? 
                                    <div className="card border-0 active">
                                        <form className="card-body text-start">
                                            <div className="registration-form text-dark text-start">
                                                <div className="row g-lg-0">
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Search :</label>
                                                            <div className="filter-search-form position-relative filter-border">
                                                                {/* <FiSearch className="fea icon-ex-md icons"/> */}
                                                                <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Select Categories:</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                {/* <FiHome className="fea icon-ex-md icons"/> */}
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={categories} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Min Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                {/* <FiDollarSign className="fea icon-ex-md icons"/> */}
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Max Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                {/* <FiDollarSign className="fea icon-ex-md icons"/> */}
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <input type="submit" id="search" name="search" style={{height: '48px'}} className="btn btn-primary searchbtn w-100" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>:''
                                }
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>


</div>
              </div>



              
              <div className="tab-pane fade" id="hotel" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row g-xl-4 gy-4">
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <path d="M18.0075 17.8392C20.8807 13.3308 20.5195 13.8933 20.6023 13.7757C21.6483 12.3003 22.2012 10.5639 22.2012 8.75391C22.2012 3.95402 18.3062 0 13.5 0C8.7095 0 4.79883 3.94622 4.79883 8.75391C4.79883 10.5627 5.3633 12.3446 6.44361 13.8399L8.99237 17.8393C6.26732 18.2581 1.63477 19.506 1.63477 22.2539C1.63477 23.2556 2.28857 24.6831 5.40327 25.7955C7.57814 26.5722 10.4536 27 13.5 27C19.1966 27 25.3652 25.3931 25.3652 22.2539C25.3652 19.5055 20.7381 18.2589 18.0075 17.8392ZM7.76508 12.9698C7.75639 12.9562 7.7473 12.9428 7.73782 12.9298C6.83886 11.6931 6.38086 10.2274 6.38086 8.75391C6.38086 4.79788 9.56633 1.58203 13.5 1.58203C17.4255 1.58203 20.6191 4.7993 20.6191 8.75391C20.6191 10.2297 20.1698 11.6457 19.3195 12.8498C19.2432 12.9503 19.6408 12.3327 13.5 21.9686L7.76508 12.9698ZM13.5 25.418C7.27766 25.418 3.2168 23.589 3.2168 22.2539C3.2168 21.3566 5.30339 19.8811 9.92714 19.306L12.8329 23.8656C12.9044 23.9777 13.0029 24.0701 13.1195 24.134C13.2361 24.198 13.367 24.2315 13.4999 24.2315C13.6329 24.2315 13.7638 24.198 13.8804 24.134C13.9969 24.0701 14.0955 23.9777 14.167 23.8656L17.0727 19.306C21.6966 19.8811 23.7832 21.3566 23.7832 22.2539C23.7832 23.5776 19.7589 25.418 13.5 25.418Z" />
                              <path d="M13.5 4.79883C11.3192 4.79883 9.54492 6.57308 9.54492 8.75391C9.54492 10.9347 11.3192 12.709 13.5 12.709C15.6808 12.709 17.4551 10.9347 17.4551 8.75391C17.4551 6.57308 15.6808 4.79883 13.5 4.79883ZM13.5 11.127C12.1915 11.127 11.127 10.0624 11.127 8.75391C11.127 7.44541 12.1915 6.38086 13.5 6.38086C14.8085 6.38086 15.873 7.44541 15.873 8.75391C15.873 10.0624 14.8085 11.127 13.5 11.127Z" />
                            </svg>
                          </div>
                          <DestinationSearch destination="Location" style="style-2"/>
                         
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23">
                              <g clipPath="url(#clip0_2037_326)">
                                <path d="M15.5978 13.5309L12.391 11.1258V6.22655C12.391 5.73394 11.9928 5.33575 11.5002 5.33575C11.0076 5.33575 10.6094 5.73394 10.6094 6.22655V11.5713C10.6094 11.8519 10.7412 12.1164 10.9657 12.2839L14.5288 14.9563C14.6826 15.0721 14.8699 15.1346 15.0624 15.1344C15.3341 15.1344 15.6013 15.0124 15.7759 14.7772C16.0717 14.3843 15.9916 13.8258 15.5978 13.5309Z" />
                                <path d="M11.5 0C5.15851 0 0 5.15851 0 11.5C0 17.8415 5.15851 23 11.5 23C17.8415 23 23 17.8415 23 11.5C23 5.15851 17.8415 0 11.5 0ZM11.5 21.2184C6.14194 21.2184 1.78156 16.8581 1.78156 11.5C1.78156 6.14194 6.14194 1.78156 11.5 1.78156C16.859 1.78156 21.2184 6.14194 21.2184 11.5C21.2184 16.8581 16.8581 21.2184 11.5 21.2184Z" />
                              </g>
                            </svg>
                          </div>
                          <DateRange style="style-2"/>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                              <g clipPath="url(#clip0_2037_310)">
                                <path d="M23.5312 13.403C23.408 13.403 23.2872 13.4531 23.1998 13.5403C23.1123 13.6284 23.0629 13.7475 23.0625 13.8717C23.0625 13.9949 23.1127 14.1159 23.1998 14.2031C23.288 14.2906 23.407 14.34 23.5312 14.3405C23.6547 14.3405 23.7755 14.2903 23.8627 14.2031C23.9502 14.115 23.9996 13.9959 24 13.8717C24 13.748 23.9498 13.6274 23.8627 13.5403C23.7746 13.4527 23.6555 13.4034 23.5312 13.403Z" />
                                <path d="M20.358 5.47013H19.98V2.64006H20.5045C20.7633 2.64006 20.9732 2.43024 20.9732 2.17131V1.42426C20.9732 0.638919 20.3343 6.10352e-05 19.549 6.10352e-05H14.6498C13.8647 6.10352e-05 13.2258 0.638919 13.2258 1.42426V2.17131C13.2258 2.43024 13.4357 2.64006 13.6946 2.64006H14.2188V5.47013H13.8409C13.3765 5.46999 12.9164 5.55861 12.4853 5.73122V2.34381C12.4853 2.14478 12.3596 1.96735 12.1717 1.9014C12.0591 1.86206 11.9357 1.8671 11.8267 1.91551C11.826 1.91589 11.8253 1.91589 11.8243 1.91626L6.62639 4.25504C6.39033 4.36126 6.28505 4.63885 6.39127 4.87486C6.49744 5.11088 6.77503 5.21635 7.01105 5.10999L9.59137 3.94908L4.69529 8.47875L1.74714 7.47862L3.54179 6.67111C3.7778 6.56494 3.88304 6.28734 3.77687 6.05133C3.67069 5.81531 3.3931 5.70985 3.15704 5.81621L0.276436 7.11225C0.190609 7.15088 0.118395 7.21445 0.0691876 7.29468C0.01998 7.37491 -0.00394324 7.4681 0.000530035 7.56211C0.00499931 7.65612 0.0376757 7.74661 0.0943034 7.82179C0.150931 7.89697 0.228885 7.95336 0.318014 7.98361L4.45782 9.38821L5.85291 12.729C5.89465 12.829 5.96972 12.9114 6.06536 12.9622C6.161 13.0131 6.27131 13.0293 6.37753 13.008C6.48971 12.9854 6.58975 12.9226 6.65878 12.8313C6.65986 12.8299 6.66113 12.8286 6.66244 12.827L8.25342 10.6744L10.1991 11.3354V18.4803C10.1991 20.3806 11.6625 21.9446 13.5214 22.1073V22.7333C13.5214 23.4317 14.0897 24 14.7881 24C15.4866 24 16.0548 23.4317 16.0548 22.7333V22.1221H18.144V22.7333C18.144 23.4317 18.7122 24 19.4108 24C20.1091 24 20.6775 23.4317 20.6775 22.7333V22.1072C22.5363 21.9446 23.9997 20.3806 23.9997 18.4803V15.7508C23.9997 15.4918 23.7899 15.282 23.531 15.282C23.2721 15.282 23.0622 15.4918 23.0622 15.7508V18.4803C23.0622 19.9715 21.8492 21.1846 20.358 21.1846H13.8409C12.3497 21.1846 11.1366 19.9713 11.1366 18.4804V11.6537L11.8659 11.9017C11.9365 11.9256 12.0117 11.9324 12.0854 11.9215C12.1591 11.9105 12.2291 11.8822 12.2897 11.8389C12.3502 11.7955 12.3995 11.7383 12.4336 11.672C12.4676 11.6057 12.4853 11.5323 12.4853 11.4578V6.77161C12.8972 6.53283 13.3648 6.40724 13.8409 6.40758H20.358C21.8492 6.40758 23.0623 7.6207 23.0623 9.11189V12.076C23.0623 12.3349 23.2721 12.5447 23.531 12.5447C23.7899 12.5447 23.9998 12.3349 23.9998 12.076V9.11189C23.9998 7.10377 22.3661 5.47008 20.358 5.47008L20.358 5.47013ZM19.74 22.1221V22.7331C19.7399 22.8204 19.7052 22.9041 19.6435 22.9658C19.5818 23.0276 19.4981 23.0623 19.4108 23.0623C19.3235 23.0622 19.2398 23.0275 19.1781 22.9658C19.1163 22.9041 19.0816 22.8204 19.0815 22.7331V22.1221H19.74ZM15.1173 22.1221V22.7331C15.1173 22.9148 14.9697 23.0623 14.7881 23.0623C14.6064 23.0623 14.4589 22.9148 14.4589 22.7331V22.1221H15.1173ZM5.81667 9.51051V10.2094L5.36771 9.13382L7.74642 6.93309L5.91938 9.21787C5.85288 9.30091 5.81666 9.40413 5.81667 9.51051ZM6.75417 11.1255V10.1649L7.32159 10.3577L6.75417 11.1255ZM11.5478 10.8034L8.23528 9.67804C8.2342 9.67748 8.23312 9.67729 8.23219 9.67692L7.06875 9.28162L11.5478 3.68044V10.8034ZM14.1631 1.42421C14.1631 1.15576 14.3816 0.937512 14.6498 0.937512H19.549C19.8174 0.937512 20.0357 1.15576 20.0357 1.42421V1.70251H14.1631V1.42421ZM15.1563 2.64006H19.0425V5.47013H15.1563V2.64006Z" />
                                <path d="M12.3185 13.9444V17.5274C12.3185 18.8196 13.3699 19.8712 14.6622 19.8712H19.5372C20.8295 19.8712 21.881 18.8196 21.881 17.5274V13.9444C21.881 13.169 21.2502 12.5381 20.4747 12.5381H13.7247C12.9493 12.5381 12.3185 13.169 12.3185 13.9444ZM19.5372 18.9337H14.6622C13.8868 18.9337 13.256 18.3027 13.256 17.5274V15.7656H18.4219V16.2047C18.4219 16.4634 18.6318 16.6734 18.8907 16.6734C19.1495 16.6734 19.3594 16.4634 19.3594 16.2047V15.7656H20.9435V17.5274C20.9435 18.3027 20.3127 18.9337 19.5372 18.9337ZM20.9435 13.9444V14.8281H13.256V13.9444C13.256 13.6859 13.4663 13.4756 13.7247 13.4756H20.4747C20.7333 13.4756 20.9435 13.6859 20.9435 13.9444ZM5.27403 5.84674C5.39745 5.84674 5.51825 5.79658 5.60544 5.7094C5.69298 5.62126 5.74231 5.50221 5.74278 5.37799C5.74278 5.25424 5.69263 5.13321 5.60544 5.04602C5.51728 4.95858 5.3982 4.90943 5.27403 4.90924C5.14988 4.9095 5.03082 4.95864 4.94263 5.04602C4.85495 5.1343 4.8056 5.25357 4.80528 5.37799C4.80528 5.50127 4.85544 5.62207 4.94263 5.7094C5.03076 5.79693 5.14981 5.84627 5.27403 5.84674ZM5.18117 13.3349C4.64525 13.8708 3.93275 14.166 3.17492 14.166C3.04288 14.166 2.91233 14.157 2.78361 14.1394C2.73528 13.459 2.4522 12.7925 1.9347 12.2726C1.86495 12.1996 1.52914 11.8742 1.06189 11.885C0.84725 11.8894 0.530141 11.967 0.238766 12.313C-0.206547 12.8416 0.0650473 13.557 0.505579 13.9977C0.87875 14.3709 1.31619 14.6563 1.793 14.8436C1.70486 15.1945 1.52302 15.5147 1.26692 15.7702C1.01405 16.0234 0.698004 16.2044 0.351594 16.2942C0.101094 16.359 -0.0497965 16.6146 0.0150316 16.8653C0.0695941 17.0766 0.260047 17.2169 0.468594 17.2169C0.508247 17.2169 0.547744 17.2119 0.586157 17.2021C1.09462 17.0701 1.55858 16.8047 1.92997 16.4332C2.31889 16.0441 2.57614 15.5726 2.70153 15.0744C2.85856 15.0938 3.01664 15.1036 3.17488 15.1035C4.18306 15.1035 5.1312 14.7109 5.84422 13.9979C6.02713 13.8148 6.02713 13.518 5.84422 13.3349C5.66113 13.1519 5.36427 13.1519 5.18117 13.3349ZM1.16863 13.335C1.05617 13.2222 0.90861 12.9732 0.956047 12.9168C1.00419 12.8595 1.05163 12.8234 1.0798 12.8223H1.082C1.13033 12.8223 1.21292 12.8763 1.25413 12.9176C1.2598 12.924 1.25928 12.923 1.26692 12.9307C1.50866 13.1718 1.6845 13.4709 1.77763 13.7994C1.55467 13.6727 1.34982 13.5165 1.16863 13.335ZM18.8438 9.70315C18.8438 8.74146 18.0614 7.95907 17.0997 7.95907C16.138 7.95907 15.3556 8.74146 15.3556 9.70315C15.3556 10.6648 16.138 11.4472 17.0997 11.4472C18.0614 11.4472 18.8438 10.6648 18.8438 9.70315ZM16.2931 9.70315C16.2931 9.2584 16.655 8.89657 17.0997 8.89657C17.5445 8.89657 17.9063 9.2584 17.9063 9.70315C17.9063 10.1479 17.5445 10.5097 17.0997 10.5097C16.655 10.5097 16.2931 10.1479 16.2931 9.70315Z" />
                              </g>
                            </svg>
                          </div>
                          <div className="searchbox-input">
                            <label>Room</label>
                            4
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <g clipPath="url(#clip0_273_1754)">
                                <path d="M13.3207 14.07C13.4615 14.163 13.6265 14.2126 13.7952 14.2127C14.0765 14.2127 14.3521 14.0761 14.5173 13.8238C14.7799 13.4251 14.6699 12.8893 14.2712 12.6268C12.4344 11.4175 11.4549 10.0781 11.189 8.413C11.0664 7.63051 11.2293 6.44276 11.8788 5.68373C12.3 5.19189 12.8555 4.95227 13.5776 4.95227C14.9937 4.95227 15.5731 5.95799 15.7926 6.55698C16.3228 8.00211 15.8852 9.80108 14.7761 10.7403C14.4116 11.0492 14.3666 11.5944 14.6745 11.958C14.9834 12.323 15.5281 12.3679 15.8922 12.0596C17.5541 10.6528 18.1943 8.0887 17.415 5.96263C16.787 4.2484 15.3522 3.22491 13.5775 3.22491C12.3552 3.22491 11.3134 3.6868 10.5651 4.56052C9.4864 5.82268 9.30716 7.56876 9.48218 8.68299C9.93995 11.5476 11.8924 13.1293 13.3207 14.07Z" />
                                <path d="M20.1255 22.0477H7.78708C7.81845 18.178 8.05759 17.0286 8.16475 16.7076C8.40062 16.0014 9.36979 15.275 10.2183 14.8006C10.9848 16.008 12.2021 16.7277 13.555 16.7277H13.5555C14.893 16.7272 16.0999 16.008 16.8628 14.801C17.7112 15.2756 18.679 16.0019 18.9144 16.7072C19.2186 17.6211 19.2013 18.9062 19.1873 19.9386C19.1845 20.1506 19.1816 20.3528 19.1816 20.5404C19.1816 21.0178 19.5682 21.4044 20.0455 21.4044C20.5229 21.4044 20.9095 21.0178 20.9095 20.5404C20.9095 20.3603 20.9123 20.166 20.915 19.962C20.9314 18.7991 20.9515 17.3521 20.5538 16.1601C19.9014 14.2048 17.1333 12.9862 16.8197 12.8538C16.714 12.8088 16.6003 12.7854 16.4853 12.7851C16.3704 12.7848 16.2565 12.8075 16.1505 12.8519C16.0445 12.8962 15.9485 12.9613 15.8679 13.0431C15.7873 13.125 15.7238 13.2221 15.6811 13.3287C15.2628 14.3747 14.4681 14.9995 13.5555 14.9995H13.5551C12.6378 14.9995 11.8123 14.3592 11.3995 13.3287C11.3568 13.2221 11.2933 13.125 11.2128 13.0431C11.1322 12.9613 11.0361 12.8963 10.9301 12.8519C10.8241 12.8076 10.7103 12.7849 10.5953 12.7853C10.4804 12.7856 10.3667 12.8089 10.2609 12.8538C9.94784 12.9862 7.17923 14.2044 6.52593 16.1606C6.21422 17.0965 6.05655 19.3681 6.05655 22.9113C6.05655 23.3886 6.44313 23.7752 6.92047 23.7752H20.1261C20.603 23.7752 20.9896 23.3891 20.9896 22.9118C20.9895 22.4343 20.6029 22.0477 20.1255 22.0477ZM5.3695 13.815C4.171 13.815 3.19618 12.5608 3.19618 11.0197C3.19618 9.48001 4.171 8.22724 5.3695 8.22724C5.98304 8.22724 6.59094 8.58197 6.95596 9.15243C7.22315 9.57034 7.58495 10.459 7.00463 11.7166C6.80478 12.1499 6.99387 12.6628 7.42723 12.8631C7.86106 13.0625 8.37352 12.8739 8.57332 12.4405C9.24909 10.9762 9.18966 9.43888 8.41048 8.22118C7.72069 7.14343 6.58393 6.49993 5.36903 6.49993C3.21817 6.49993 1.46835 8.52724 1.46835 11.0197C1.46835 13.5136 3.21817 15.5423 5.36903 15.5423C5.84636 15.5423 6.23342 15.1562 6.23342 14.6789C6.23337 14.2015 5.84684 13.815 5.3695 13.815ZM4.27767 21.2255H1.75991C1.7983 20.3701 1.87597 19.0981 2.01682 18.3503C2.19933 17.374 2.72444 16.8232 3.13296 16.533C3.52281 16.2569 3.61404 15.7178 3.33745 15.3289C3.06135 14.939 2.52268 14.8473 2.13331 15.1244C1.58578 15.5128 0.621729 16.4076 0.318939 18.0315C0.0680901 19.3639 0.00307088 21.9584 0.000223323 22.0679C-0.00239217 22.1831 0.0179889 22.2976 0.060174 22.4048C0.102359 22.512 0.165501 22.6097 0.245904 22.6922C0.326391 22.7746 0.422553 22.8401 0.528728 22.8848C0.634904 22.9294 0.748946 22.9524 0.86414 22.9524H4.27762C4.75496 22.9524 5.14154 22.5667 5.14154 22.0894C5.14159 21.6121 4.75501 21.2255 4.27767 21.2255ZM25.5327 11.0187C25.5327 8.52623 23.7829 6.49893 21.632 6.49893C20.4166 6.49893 19.2794 7.14195 18.5892 8.2197C17.81 9.43692 17.7501 10.9747 18.4249 12.439C18.6248 12.8719 19.1381 13.0619 19.571 12.8621C20.0039 12.6623 20.1939 12.1494 19.9941 11.716C19.4138 10.4581 19.7764 9.56986 20.0437 9.15191C20.4092 8.58144 21.0171 8.22671 21.6316 8.22671C22.8301 8.22671 23.8049 9.47953 23.8049 11.0192C23.8049 12.5602 22.8301 13.8145 21.6316 13.8145C21.1542 13.8145 20.7677 14.201 20.7677 14.6784C20.7677 15.1557 21.1542 15.5423 21.6316 15.5423C23.7819 15.5423 25.5322 13.5136 25.5327 11.0187ZM26.6811 18.0334C26.39 16.4624 25.4746 15.5769 24.9552 15.1894C24.5728 14.9049 24.0313 14.9825 23.7459 15.3649C23.4609 15.7473 23.5395 16.2892 23.9214 16.5742C24.3093 16.8634 24.8078 17.4053 24.9828 18.3511C25.1236 19.098 25.2013 20.3695 25.2397 21.2245H22.7215C22.2441 21.2245 21.8575 21.6111 21.8575 22.0885C21.8575 22.5658 22.2441 22.9524 22.7215 22.9524H26.1359C26.3685 22.9524 26.5912 22.8588 26.7545 22.6917C26.8349 22.6092 26.8979 22.5115 26.94 22.4043C26.9821 22.2971 27.0024 22.1826 26.9997 22.0674C26.997 21.9579 26.9324 19.3629 26.6811 18.0334Z" />
                              </g>
                            </svg>
                          </div>
                          <GuestDropdown noScroll="two no-scroll" style="style-2"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="tab-pane fade" id="visa" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row g-xl-4 gy-4">
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <path d="M18.0075 17.8392C20.8807 13.3308 20.5195 13.8933 20.6023 13.7757C21.6483 12.3003 22.2012 10.5639 22.2012 8.75391C22.2012 3.95402 18.3062 0 13.5 0C8.7095 0 4.79883 3.94622 4.79883 8.75391C4.79883 10.5627 5.3633 12.3446 6.44361 13.8399L8.99237 17.8393C6.26732 18.2581 1.63477 19.506 1.63477 22.2539C1.63477 23.2556 2.28857 24.6831 5.40327 25.7955C7.57814 26.5722 10.4536 27 13.5 27C19.1966 27 25.3652 25.3931 25.3652 22.2539C25.3652 19.5055 20.7381 18.2589 18.0075 17.8392ZM7.76508 12.9698C7.75639 12.9562 7.7473 12.9428 7.73782 12.9298C6.83886 11.6931 6.38086 10.2274 6.38086 8.75391C6.38086 4.79788 9.56633 1.58203 13.5 1.58203C17.4255 1.58203 20.6191 4.7993 20.6191 8.75391C20.6191 10.2297 20.1698 11.6457 19.3195 12.8498C19.2432 12.9503 19.6408 12.3327 13.5 21.9686L7.76508 12.9698ZM13.5 25.418C7.27766 25.418 3.2168 23.589 3.2168 22.2539C3.2168 21.3566 5.30339 19.8811 9.92714 19.306L12.8329 23.8656C12.9044 23.9777 13.0029 24.0701 13.1195 24.134C13.2361 24.198 13.367 24.2315 13.4999 24.2315C13.6329 24.2315 13.7638 24.198 13.8804 24.134C13.9969 24.0701 14.0955 23.9777 14.167 23.8656L17.0727 19.306C21.6966 19.8811 23.7832 21.3566 23.7832 22.2539C23.7832 23.5776 19.7589 25.418 13.5 25.418Z" />
                              <path d="M13.5 4.79883C11.3192 4.79883 9.54492 6.57308 9.54492 8.75391C9.54492 10.9347 11.3192 12.709 13.5 12.709C15.6808 12.709 17.4551 10.9347 17.4551 8.75391C17.4551 6.57308 15.6808 4.79883 13.5 4.79883ZM13.5 11.127C12.1915 11.127 11.127 10.0624 11.127 8.75391C11.127 7.44541 12.1915 6.38086 13.5 6.38086C14.8085 6.38086 15.873 7.44541 15.873 8.75391C15.873 10.0624 14.8085 11.127 13.5 11.127Z" />
                            </svg>
                          </div>
                          <TourCategoryDropdown style="style-2" noScroll="two" labelType="Country" data={['Australia','Brazil','Bangladesh','France','Spain']} />
                          
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <g clipPath="url(#clip0_273_1731)">
                                <path d="M26.4727 15.0783C26.334 15.0783 26.1981 15.1348 26.0998 15.2328C26.0013 15.332 25.9458 15.4659 25.9453 15.6057C25.9453 15.7443 26.0017 15.8804 26.0998 15.9785C26.199 16.077 26.3329 16.1325 26.4727 16.133C26.6115 16.133 26.7474 16.0766 26.8455 15.9785C26.944 15.8794 26.9995 15.7454 27 15.6057C27 15.4665 26.9436 15.3309 26.8455 15.2328C26.7464 15.1343 26.6124 15.0788 26.4727 15.0783Z" />
                                <path d="M22.9027 6.15386H22.4775V2.97002H23.0675C23.3588 2.97002 23.5949 2.73399 23.5949 2.44268V1.60226C23.5949 0.718746 22.8761 3.05176e-05 21.9926 3.05176e-05H16.4811C15.5978 3.05176e-05 14.879 0.718746 14.879 1.60226V2.44268C14.879 2.73399 15.1151 2.97002 15.4064 2.97002H15.9962V6.15386H15.571C15.0486 6.1537 14.531 6.2534 14.046 6.44759V2.63674C14.046 2.41283 13.9045 2.21324 13.6932 2.13904C13.5665 2.09478 13.4277 2.10045 13.305 2.15491C13.3042 2.15533 13.3034 2.15533 13.3024 2.15575L7.45469 4.78688C7.18912 4.90637 7.07068 5.21867 7.19018 5.48418C7.30962 5.7497 7.62191 5.86835 7.88743 5.7487L10.7903 4.44268L5.2822 9.53855L1.96553 8.41341L3.98451 7.50496C4.25003 7.38552 4.36842 7.07323 4.24898 6.80771C4.12953 6.54219 3.81724 6.42354 3.55167 6.54319L0.31099 8.00124C0.214435 8.0447 0.133195 8.11622 0.077836 8.20648C0.0224775 8.29674 -0.00443615 8.40157 0.000596289 8.50733C0.00562422 8.6131 0.0423852 8.7149 0.106091 8.79948C0.169797 8.88406 0.257496 8.94749 0.357766 8.98152L5.01505 10.5617L6.58452 14.3201C6.63148 14.4325 6.71594 14.5253 6.82353 14.5825C6.93113 14.6397 7.05523 14.6579 7.17473 14.634C7.30092 14.6086 7.41346 14.5379 7.49113 14.4352C7.49234 14.4336 7.49377 14.4321 7.49524 14.4303L9.2851 12.0086L11.474 12.7522V20.7903C11.474 22.9282 13.1203 24.6877 15.2115 24.8706V25.5749C15.2115 26.3606 15.8509 27 16.6366 27C17.4225 27 18.0617 26.3606 18.0617 25.5749V24.8873H20.412V25.5749C20.412 26.3606 21.0512 27 21.8371 27C22.6228 27 23.2622 26.3606 23.2622 25.5749V24.8706C25.3534 24.6877 26.9997 22.9281 26.9997 20.7903V17.7196C26.9997 17.4283 26.7636 17.1922 26.4724 17.1922C26.1811 17.1922 25.945 17.4283 25.945 17.7196V20.7903C25.945 22.4679 24.5803 23.8326 22.9027 23.8326H15.571C13.8934 23.8326 12.5287 22.4677 12.5287 20.7904V13.1104L13.3492 13.3894C13.4285 13.4163 13.5132 13.4239 13.5961 13.4116C13.679 13.3993 13.7577 13.3675 13.8259 13.3187C13.894 13.2699 13.9495 13.2055 13.9878 13.1309C14.026 13.0564 14.046 12.9738 14.046 12.89V7.61802C14.5093 7.3494 15.0354 7.20811 15.571 7.20849H22.9028C24.5804 7.20849 25.9451 8.57325 25.9451 10.2508V13.5854C25.9451 13.8767 26.1812 14.1128 26.4724 14.1128C26.7637 14.1128 26.9998 13.8767 26.9998 13.5854V10.2508C26.9998 7.9917 25.1619 6.1538 22.9028 6.1538L22.9027 6.15386ZM22.2075 24.8873V25.5747C22.2074 25.6729 22.1684 25.7671 22.0989 25.8365C22.0295 25.906 21.9353 25.945 21.8371 25.9451C21.7389 25.945 21.6448 25.9059 21.5753 25.8365C21.5059 25.7671 21.4668 25.6729 21.4667 25.5747V24.8873H22.2075ZM17.007 24.8873V25.5747C17.007 25.7791 16.8409 25.9451 16.6366 25.9451C16.4322 25.9451 16.2662 25.7791 16.2662 25.5747V24.8873H17.007ZM6.54376 10.6993V11.4856L6.03867 10.2755L8.71472 7.79969L6.6593 10.3701C6.58449 10.4635 6.54374 10.5796 6.54376 10.6993ZM7.59844 12.5161V11.4355L8.23679 11.6524L7.59844 12.5161ZM12.9913 12.1538L9.26469 10.8878C9.26348 10.8871 9.26226 10.8869 9.26121 10.8865L7.95234 10.4418L12.9913 4.14046V12.1538ZM15.9335 1.6022C15.9335 1.30019 16.1793 1.05466 16.4811 1.05466H21.9926C22.2946 1.05466 22.5402 1.30019 22.5402 1.6022V1.91529H15.9335V1.6022ZM17.0509 2.97002H21.4228V6.15386H17.0509V2.97002Z" />
                                <path d="M13.8583 15.6875V19.7184C13.8583 21.1721 15.0411 22.3551 16.495 22.3551H21.9794C23.4332 22.3551 24.6161 21.1721 24.6161 19.7184V15.6875C24.6161 14.8151 23.9064 14.1054 23.034 14.1054H15.4403C14.5679 14.1054 13.8583 14.8151 13.8583 15.6875ZM21.9794 21.3004H16.495C15.6226 21.3004 14.9129 20.5906 14.9129 19.7184V17.7363H20.7246V18.2303C20.7246 18.5214 20.9607 18.7576 21.252 18.7576C21.5432 18.7576 21.7793 18.5214 21.7793 18.2303V17.7363H23.5614V19.7184C23.5614 20.5906 22.8517 21.3004 21.9794 21.3004ZM23.5614 15.6875V16.6816H14.9129V15.6875C14.9129 15.3966 15.1496 15.1601 15.4403 15.1601H23.034C23.3249 15.1601 23.5614 15.3966 23.5614 15.6875ZM5.93329 6.57761C6.07214 6.57761 6.20803 6.52118 6.30612 6.42309C6.4046 6.32394 6.4601 6.19001 6.46063 6.05026C6.46063 5.91104 6.4042 5.77488 6.30612 5.6768C6.20694 5.57842 6.07297 5.52313 5.93329 5.52292C5.79361 5.52321 5.65967 5.57849 5.56045 5.6768C5.46182 5.77611 5.4063 5.91029 5.40594 6.05026C5.40594 6.18895 5.46237 6.32485 5.56045 6.42309C5.65961 6.52157 5.79354 6.57708 5.93329 6.57761ZM5.82882 15.0018C5.22591 15.6047 4.42434 15.9367 3.57179 15.9367C3.42323 15.9367 3.27637 15.9267 3.13156 15.9069C3.07719 15.1414 2.75873 14.3916 2.17654 13.8068C2.09807 13.7246 1.72028 13.3585 1.19463 13.3706C0.953157 13.3756 0.596409 13.4629 0.268612 13.8521C-0.232365 14.4468 0.0731782 15.2516 0.568776 15.7474C0.988594 16.1672 1.48071 16.4884 2.01713 16.6991C1.91796 17.0938 1.71339 17.4541 1.42529 17.7415C1.1408 18.0264 0.785255 18.2299 0.395543 18.331C0.113731 18.4039 -0.0560211 18.6915 0.0169106 18.9735C0.0782934 19.2112 0.292553 19.369 0.527168 19.369C0.571778 19.369 0.616212 19.3634 0.659426 19.3524C1.23145 19.2039 1.7534 18.9053 2.17122 18.4873C2.60875 18.0497 2.89816 17.5191 3.03922 16.9587C3.21588 16.9806 3.39372 16.9915 3.57174 16.9914C4.70595 16.9914 5.7726 16.5498 6.57475 15.7476C6.78052 15.5417 6.78052 15.2077 6.57475 15.0018C6.36877 14.7959 6.0348 14.7959 5.82882 15.0018ZM1.3147 15.0019C1.18819 14.875 1.02219 14.5949 1.07555 14.5315C1.12971 14.467 1.18308 14.4264 1.21477 14.4252H1.21725C1.27162 14.4252 1.36454 14.4859 1.41089 14.5323C1.41727 14.5395 1.41669 14.5384 1.42529 14.5471C1.69724 14.8183 1.89506 15.1548 1.99983 15.5244C1.749 15.3818 1.51855 15.2061 1.3147 15.0019ZM21.1993 10.9161C21.1993 9.83417 20.3191 8.95398 19.2372 8.95398C18.1553 8.95398 17.2751 9.83417 17.2751 10.9161C17.2751 11.998 18.1553 12.8782 19.2372 12.8782C20.3191 12.8782 21.1993 11.998 21.1993 10.9161ZM18.3298 10.9161C18.3298 10.4157 18.7368 10.0087 19.2372 10.0087C19.7375 10.0087 20.1446 10.4157 20.1446 10.9161C20.1446 11.4164 19.7375 11.8235 19.2372 11.8235C18.7368 11.8235 18.3298 11.4164 18.3298 10.9161Z" />
                              </g>
                            </svg>
                          </div>
                          <TourCategoryDropdown style="style-2" noScroll="two" labelType="Visa Type" data={['Tourist','Medical','Diplomat']} />
                         
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                              <g clipPath="url(#clip0_2037_411)">
                                <path d="M15.5978 13.531L12.391 11.1259V6.22659C12.391 5.73397 11.9928 5.33578 11.5002 5.33578C11.0076 5.33578 10.6094 5.73397 10.6094 6.22659V11.5713C10.6094 11.8519 10.7412 12.1165 10.9657 12.2839L14.5288 14.9563C14.6826 15.0721 14.8699 15.1346 15.0624 15.1345C15.3341 15.1345 15.6013 15.0124 15.7759 14.7772C16.0717 14.3844 15.9916 13.8258 15.5978 13.531Z" />
                                <path d="M11.5 0C5.15851 0 0 5.15851 0 11.5C0 17.8415 5.15851 23 11.5 23C17.8415 23 23 17.8415 23 11.5C23 5.15851 17.8415 0 11.5 0ZM11.5 21.2184C6.14194 21.2184 1.78156 16.8581 1.78156 11.5C1.78156 6.14194 6.14194 1.78156 11.5 1.78156C16.859 1.78156 21.2184 6.14194 21.2184 11.5C21.2184 16.8581 16.8581 21.2184 11.5 21.2184Z" />
                              </g>
                            </svg>
                          </div>
                          <TourCategoryDropdown style="style-2" noScroll="two" labelType="Nationality" data={['Bangladeshi','Indian','Brazilian','Australian']} />
                          
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <g clipPath="url(#clip0_273_1731)">
                                <path d="M26.4727 15.0783C26.334 15.0783 26.1981 15.1348 26.0998 15.2328C26.0013 15.332 25.9458 15.4659 25.9453 15.6057C25.9453 15.7443 26.0017 15.8804 26.0998 15.9785C26.199 16.077 26.3329 16.1325 26.4727 16.133C26.6115 16.133 26.7474 16.0766 26.8455 15.9785C26.944 15.8794 26.9995 15.7454 27 15.6057C27 15.4665 26.9436 15.3309 26.8455 15.2328C26.7464 15.1343 26.6124 15.0788 26.4727 15.0783Z" />
                                <path d="M22.9027 6.15386H22.4775V2.97002H23.0675C23.3588 2.97002 23.5949 2.73399 23.5949 2.44268V1.60226C23.5949 0.718746 22.8761 3.05176e-05 21.9926 3.05176e-05H16.4811C15.5978 3.05176e-05 14.879 0.718746 14.879 1.60226V2.44268C14.879 2.73399 15.1151 2.97002 15.4064 2.97002H15.9962V6.15386H15.571C15.0486 6.1537 14.531 6.2534 14.046 6.44759V2.63674C14.046 2.41283 13.9045 2.21324 13.6932 2.13904C13.5665 2.09478 13.4277 2.10045 13.305 2.15491C13.3042 2.15533 13.3034 2.15533 13.3024 2.15575L7.45469 4.78688C7.18912 4.90637 7.07068 5.21867 7.19018 5.48418C7.30962 5.7497 7.62191 5.86835 7.88743 5.7487L10.7903 4.44268L5.2822 9.53855L1.96553 8.41341L3.98451 7.50496C4.25003 7.38552 4.36842 7.07323 4.24898 6.80771C4.12953 6.54219 3.81724 6.42354 3.55167 6.54319L0.31099 8.00124C0.214435 8.0447 0.133195 8.11622 0.077836 8.20648C0.0224775 8.29674 -0.00443615 8.40157 0.000596289 8.50733C0.00562422 8.6131 0.0423852 8.7149 0.106091 8.79948C0.169797 8.88406 0.257496 8.94749 0.357766 8.98152L5.01505 10.5617L6.58452 14.3201C6.63148 14.4325 6.71594 14.5253 6.82353 14.5825C6.93113 14.6397 7.05523 14.6579 7.17473 14.634C7.30092 14.6086 7.41346 14.5379 7.49113 14.4352C7.49234 14.4336 7.49377 14.4321 7.49524 14.4303L9.2851 12.0086L11.474 12.7522V20.7903C11.474 22.9282 13.1203 24.6877 15.2115 24.8706V25.5749C15.2115 26.3606 15.8509 27 16.6366 27C17.4225 27 18.0617 26.3606 18.0617 25.5749V24.8873H20.412V25.5749C20.412 26.3606 21.0512 27 21.8371 27C22.6228 27 23.2622 26.3606 23.2622 25.5749V24.8706C25.3534 24.6877 26.9997 22.9281 26.9997 20.7903V17.7196C26.9997 17.4283 26.7636 17.1922 26.4724 17.1922C26.1811 17.1922 25.945 17.4283 25.945 17.7196V20.7903C25.945 22.4679 24.5803 23.8326 22.9027 23.8326H15.571C13.8934 23.8326 12.5287 22.4677 12.5287 20.7904V13.1104L13.3492 13.3894C13.4285 13.4163 13.5132 13.4239 13.5961 13.4116C13.679 13.3993 13.7577 13.3675 13.8259 13.3187C13.894 13.2699 13.9495 13.2055 13.9878 13.1309C14.026 13.0564 14.046 12.9738 14.046 12.89V7.61802C14.5093 7.3494 15.0354 7.20811 15.571 7.20849H22.9028C24.5804 7.20849 25.9451 8.57325 25.9451 10.2508V13.5854C25.9451 13.8767 26.1812 14.1128 26.4724 14.1128C26.7637 14.1128 26.9998 13.8767 26.9998 13.5854V10.2508C26.9998 7.9917 25.1619 6.1538 22.9028 6.1538L22.9027 6.15386ZM22.2075 24.8873V25.5747C22.2074 25.6729 22.1684 25.7671 22.0989 25.8365C22.0295 25.906 21.9353 25.945 21.8371 25.9451C21.7389 25.945 21.6448 25.9059 21.5753 25.8365C21.5059 25.7671 21.4668 25.6729 21.4667 25.5747V24.8873H22.2075ZM17.007 24.8873V25.5747C17.007 25.7791 16.8409 25.9451 16.6366 25.9451C16.4322 25.9451 16.2662 25.7791 16.2662 25.5747V24.8873H17.007ZM6.54376 10.6993V11.4856L6.03867 10.2755L8.71472 7.79969L6.6593 10.3701C6.58449 10.4635 6.54374 10.5796 6.54376 10.6993ZM7.59844 12.5161V11.4355L8.23679 11.6524L7.59844 12.5161ZM12.9913 12.1538L9.26469 10.8878C9.26348 10.8871 9.26226 10.8869 9.26121 10.8865L7.95234 10.4418L12.9913 4.14046V12.1538ZM15.9335 1.6022C15.9335 1.30019 16.1793 1.05466 16.4811 1.05466H21.9926C22.2946 1.05466 22.5402 1.30019 22.5402 1.6022V1.91529H15.9335V1.6022ZM17.0509 2.97002H21.4228V6.15386H17.0509V2.97002Z" />
                                <path d="M13.8583 15.6875V19.7184C13.8583 21.1721 15.0411 22.3551 16.495 22.3551H21.9794C23.4332 22.3551 24.6161 21.1721 24.6161 19.7184V15.6875C24.6161 14.8151 23.9064 14.1054 23.034 14.1054H15.4403C14.5679 14.1054 13.8583 14.8151 13.8583 15.6875ZM21.9794 21.3004H16.495C15.6226 21.3004 14.9129 20.5906 14.9129 19.7184V17.7363H20.7246V18.2303C20.7246 18.5214 20.9607 18.7576 21.252 18.7576C21.5432 18.7576 21.7793 18.5214 21.7793 18.2303V17.7363H23.5614V19.7184C23.5614 20.5906 22.8517 21.3004 21.9794 21.3004ZM23.5614 15.6875V16.6816H14.9129V15.6875C14.9129 15.3966 15.1496 15.1601 15.4403 15.1601H23.034C23.3249 15.1601 23.5614 15.3966 23.5614 15.6875ZM5.93329 6.57761C6.07214 6.57761 6.20803 6.52118 6.30612 6.42309C6.4046 6.32394 6.4601 6.19001 6.46063 6.05026C6.46063 5.91104 6.4042 5.77488 6.30612 5.6768C6.20694 5.57842 6.07297 5.52313 5.93329 5.52292C5.79361 5.52321 5.65967 5.57849 5.56045 5.6768C5.46182 5.77611 5.4063 5.91029 5.40594 6.05026C5.40594 6.18895 5.46237 6.32485 5.56045 6.42309C5.65961 6.52157 5.79354 6.57708 5.93329 6.57761ZM5.82882 15.0018C5.22591 15.6047 4.42434 15.9367 3.57179 15.9367C3.42323 15.9367 3.27637 15.9267 3.13156 15.9069C3.07719 15.1414 2.75873 14.3916 2.17654 13.8068C2.09807 13.7246 1.72028 13.3585 1.19463 13.3706C0.953157 13.3756 0.596409 13.4629 0.268612 13.8521C-0.232365 14.4468 0.0731782 15.2516 0.568776 15.7474C0.988594 16.1672 1.48071 16.4884 2.01713 16.6991C1.91796 17.0938 1.71339 17.4541 1.42529 17.7415C1.1408 18.0264 0.785255 18.2299 0.395543 18.331C0.113731 18.4039 -0.0560211 18.6915 0.0169106 18.9735C0.0782934 19.2112 0.292553 19.369 0.527168 19.369C0.571778 19.369 0.616212 19.3634 0.659426 19.3524C1.23145 19.2039 1.7534 18.9053 2.17122 18.4873C2.60875 18.0497 2.89816 17.5191 3.03922 16.9587C3.21588 16.9806 3.39372 16.9915 3.57174 16.9914C4.70595 16.9914 5.7726 16.5498 6.57475 15.7476C6.78052 15.5417 6.78052 15.2077 6.57475 15.0018C6.36877 14.7959 6.0348 14.7959 5.82882 15.0018ZM1.3147 15.0019C1.18819 14.875 1.02219 14.5949 1.07555 14.5315C1.12971 14.467 1.18308 14.4264 1.21477 14.4252H1.21725C1.27162 14.4252 1.36454 14.4859 1.41089 14.5323C1.41727 14.5395 1.41669 14.5384 1.42529 14.5471C1.69724 14.8183 1.89506 15.1548 1.99983 15.5244C1.749 15.3818 1.51855 15.2061 1.3147 15.0019ZM21.1993 10.9161C21.1993 9.83417 20.3191 8.95398 19.2372 8.95398C18.1553 8.95398 17.2751 9.83417 17.2751 10.9161C17.2751 11.998 18.1553 12.8782 19.2372 12.8782C20.3191 12.8782 21.1993 11.998 21.1993 10.9161ZM18.3298 10.9161C18.3298 10.4157 18.7368 10.0087 19.2372 10.0087C19.7375 10.0087 20.1446 10.4157 20.1446 10.9161C20.1446 11.4164 19.7375 11.8235 19.2372 11.8235C18.7368 11.8235 18.3298 11.4164 18.3298 10.9161Z" />
                              </g>
                            </svg>
                          </div>
                          <div className="searchbox-input">
                            <label>Traveler</label>
                            4
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="tab-pane fade" id="activities" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row g-xl-4 gy-4">
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <path d="M18.0075 17.8392C20.8807 13.3308 20.5195 13.8933 20.6023 13.7757C21.6483 12.3003 22.2012 10.5639 22.2012 8.75391C22.2012 3.95402 18.3062 0 13.5 0C8.7095 0 4.79883 3.94622 4.79883 8.75391C4.79883 10.5627 5.3633 12.3446 6.44361 13.8399L8.99237 17.8393C6.26732 18.2581 1.63477 19.506 1.63477 22.2539C1.63477 23.2556 2.28857 24.6831 5.40327 25.7955C7.57814 26.5722 10.4536 27 13.5 27C19.1966 27 25.3652 25.3931 25.3652 22.2539C25.3652 19.5055 20.7381 18.2589 18.0075 17.8392ZM7.76508 12.9698C7.75639 12.9562 7.7473 12.9428 7.73782 12.9298C6.83886 11.6931 6.38086 10.2274 6.38086 8.75391C6.38086 4.79788 9.56633 1.58203 13.5 1.58203C17.4255 1.58203 20.6191 4.7993 20.6191 8.75391C20.6191 10.2297 20.1698 11.6457 19.3195 12.8498C19.2432 12.9503 19.6408 12.3327 13.5 21.9686L7.76508 12.9698ZM13.5 25.418C7.27766 25.418 3.2168 23.589 3.2168 22.2539C3.2168 21.3566 5.30339 19.8811 9.92714 19.306L12.8329 23.8656C12.9044 23.9777 13.0029 24.0701 13.1195 24.134C13.2361 24.198 13.367 24.2315 13.4999 24.2315C13.6329 24.2315 13.7638 24.198 13.8804 24.134C13.9969 24.0701 14.0955 23.9777 14.167 23.8656L17.0727 19.306C21.6966 19.8811 23.7832 21.3566 23.7832 22.2539C23.7832 23.5776 19.7589 25.418 13.5 25.418Z" />
                              <path d="M13.5 4.79883C11.3192 4.79883 9.54492 6.57308 9.54492 8.75391C9.54492 10.9347 11.3192 12.709 13.5 12.709C15.6808 12.709 17.4551 10.9347 17.4551 8.75391C17.4551 6.57308 15.6808 4.79883 13.5 4.79883ZM13.5 11.127C12.1915 11.127 11.127 10.0624 11.127 8.75391C11.127 7.44541 12.1915 6.38086 13.5 6.38086C14.8085 6.38086 15.873 7.44541 15.873 8.75391C15.873 10.0624 14.8085 11.127 13.5 11.127Z" />
                            </svg>
                          </div>
                          <DestinationSearch destination="Location" style="style-2" />
                        
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <g clipPath="url(#clip0_273_1731)">
                                <path d="M26.4727 15.0783C26.334 15.0783 26.1981 15.1348 26.0998 15.2328C26.0013 15.332 25.9458 15.4659 25.9453 15.6057C25.9453 15.7443 26.0017 15.8804 26.0998 15.9785C26.199 16.077 26.3329 16.1325 26.4727 16.133C26.6115 16.133 26.7474 16.0766 26.8455 15.9785C26.944 15.8794 26.9995 15.7454 27 15.6057C27 15.4665 26.9436 15.3309 26.8455 15.2328C26.7464 15.1343 26.6124 15.0788 26.4727 15.0783Z" />
                                <path d="M22.9027 6.15386H22.4775V2.97002H23.0675C23.3588 2.97002 23.5949 2.73399 23.5949 2.44268V1.60226C23.5949 0.718746 22.8761 3.05176e-05 21.9926 3.05176e-05H16.4811C15.5978 3.05176e-05 14.879 0.718746 14.879 1.60226V2.44268C14.879 2.73399 15.1151 2.97002 15.4064 2.97002H15.9962V6.15386H15.571C15.0486 6.1537 14.531 6.2534 14.046 6.44759V2.63674C14.046 2.41283 13.9045 2.21324 13.6932 2.13904C13.5665 2.09478 13.4277 2.10045 13.305 2.15491C13.3042 2.15533 13.3034 2.15533 13.3024 2.15575L7.45469 4.78688C7.18912 4.90637 7.07068 5.21867 7.19018 5.48418C7.30962 5.7497 7.62191 5.86835 7.88743 5.7487L10.7903 4.44268L5.2822 9.53855L1.96553 8.41341L3.98451 7.50496C4.25003 7.38552 4.36842 7.07323 4.24898 6.80771C4.12953 6.54219 3.81724 6.42354 3.55167 6.54319L0.31099 8.00124C0.214435 8.0447 0.133195 8.11622 0.077836 8.20648C0.0224775 8.29674 -0.00443615 8.40157 0.000596289 8.50733C0.00562422 8.6131 0.0423852 8.7149 0.106091 8.79948C0.169797 8.88406 0.257496 8.94749 0.357766 8.98152L5.01505 10.5617L6.58452 14.3201C6.63148 14.4325 6.71594 14.5253 6.82353 14.5825C6.93113 14.6397 7.05523 14.6579 7.17473 14.634C7.30092 14.6086 7.41346 14.5379 7.49113 14.4352C7.49234 14.4336 7.49377 14.4321 7.49524 14.4303L9.2851 12.0086L11.474 12.7522V20.7903C11.474 22.9282 13.1203 24.6877 15.2115 24.8706V25.5749C15.2115 26.3606 15.8509 27 16.6366 27C17.4225 27 18.0617 26.3606 18.0617 25.5749V24.8873H20.412V25.5749C20.412 26.3606 21.0512 27 21.8371 27C22.6228 27 23.2622 26.3606 23.2622 25.5749V24.8706C25.3534 24.6877 26.9997 22.9281 26.9997 20.7903V17.7196C26.9997 17.4283 26.7636 17.1922 26.4724 17.1922C26.1811 17.1922 25.945 17.4283 25.945 17.7196V20.7903C25.945 22.4679 24.5803 23.8326 22.9027 23.8326H15.571C13.8934 23.8326 12.5287 22.4677 12.5287 20.7904V13.1104L13.3492 13.3894C13.4285 13.4163 13.5132 13.4239 13.5961 13.4116C13.679 13.3993 13.7577 13.3675 13.8259 13.3187C13.894 13.2699 13.9495 13.2055 13.9878 13.1309C14.026 13.0564 14.046 12.9738 14.046 12.89V7.61802C14.5093 7.3494 15.0354 7.20811 15.571 7.20849H22.9028C24.5804 7.20849 25.9451 8.57325 25.9451 10.2508V13.5854C25.9451 13.8767 26.1812 14.1128 26.4724 14.1128C26.7637 14.1128 26.9998 13.8767 26.9998 13.5854V10.2508C26.9998 7.9917 25.1619 6.1538 22.9028 6.1538L22.9027 6.15386ZM22.2075 24.8873V25.5747C22.2074 25.6729 22.1684 25.7671 22.0989 25.8365C22.0295 25.906 21.9353 25.945 21.8371 25.9451C21.7389 25.945 21.6448 25.9059 21.5753 25.8365C21.5059 25.7671 21.4668 25.6729 21.4667 25.5747V24.8873H22.2075ZM17.007 24.8873V25.5747C17.007 25.7791 16.8409 25.9451 16.6366 25.9451C16.4322 25.9451 16.2662 25.7791 16.2662 25.5747V24.8873H17.007ZM6.54376 10.6993V11.4856L6.03867 10.2755L8.71472 7.79969L6.6593 10.3701C6.58449 10.4635 6.54374 10.5796 6.54376 10.6993ZM7.59844 12.5161V11.4355L8.23679 11.6524L7.59844 12.5161ZM12.9913 12.1538L9.26469 10.8878C9.26348 10.8871 9.26226 10.8869 9.26121 10.8865L7.95234 10.4418L12.9913 4.14046V12.1538ZM15.9335 1.6022C15.9335 1.30019 16.1793 1.05466 16.4811 1.05466H21.9926C22.2946 1.05466 22.5402 1.30019 22.5402 1.6022V1.91529H15.9335V1.6022ZM17.0509 2.97002H21.4228V6.15386H17.0509V2.97002Z" />
                                <path d="M13.8583 15.6875V19.7184C13.8583 21.1721 15.0411 22.3551 16.495 22.3551H21.9794C23.4332 22.3551 24.6161 21.1721 24.6161 19.7184V15.6875C24.6161 14.8151 23.9064 14.1054 23.034 14.1054H15.4403C14.5679 14.1054 13.8583 14.8151 13.8583 15.6875ZM21.9794 21.3004H16.495C15.6226 21.3004 14.9129 20.5906 14.9129 19.7184V17.7363H20.7246V18.2303C20.7246 18.5214 20.9607 18.7576 21.252 18.7576C21.5432 18.7576 21.7793 18.5214 21.7793 18.2303V17.7363H23.5614V19.7184C23.5614 20.5906 22.8517 21.3004 21.9794 21.3004ZM23.5614 15.6875V16.6816H14.9129V15.6875C14.9129 15.3966 15.1496 15.1601 15.4403 15.1601H23.034C23.3249 15.1601 23.5614 15.3966 23.5614 15.6875ZM5.93329 6.57761C6.07214 6.57761 6.20803 6.52118 6.30612 6.42309C6.4046 6.32394 6.4601 6.19001 6.46063 6.05026C6.46063 5.91104 6.4042 5.77488 6.30612 5.6768C6.20694 5.57842 6.07297 5.52313 5.93329 5.52292C5.79361 5.52321 5.65967 5.57849 5.56045 5.6768C5.46182 5.77611 5.4063 5.91029 5.40594 6.05026C5.40594 6.18895 5.46237 6.32485 5.56045 6.42309C5.65961 6.52157 5.79354 6.57708 5.93329 6.57761ZM5.82882 15.0018C5.22591 15.6047 4.42434 15.9367 3.57179 15.9367C3.42323 15.9367 3.27637 15.9267 3.13156 15.9069C3.07719 15.1414 2.75873 14.3916 2.17654 13.8068C2.09807 13.7246 1.72028 13.3585 1.19463 13.3706C0.953157 13.3756 0.596409 13.4629 0.268612 13.8521C-0.232365 14.4468 0.0731782 15.2516 0.568776 15.7474C0.988594 16.1672 1.48071 16.4884 2.01713 16.6991C1.91796 17.0938 1.71339 17.4541 1.42529 17.7415C1.1408 18.0264 0.785255 18.2299 0.395543 18.331C0.113731 18.4039 -0.0560211 18.6915 0.0169106 18.9735C0.0782934 19.2112 0.292553 19.369 0.527168 19.369C0.571778 19.369 0.616212 19.3634 0.659426 19.3524C1.23145 19.2039 1.7534 18.9053 2.17122 18.4873C2.60875 18.0497 2.89816 17.5191 3.03922 16.9587C3.21588 16.9806 3.39372 16.9915 3.57174 16.9914C4.70595 16.9914 5.7726 16.5498 6.57475 15.7476C6.78052 15.5417 6.78052 15.2077 6.57475 15.0018C6.36877 14.7959 6.0348 14.7959 5.82882 15.0018ZM1.3147 15.0019C1.18819 14.875 1.02219 14.5949 1.07555 14.5315C1.12971 14.467 1.18308 14.4264 1.21477 14.4252H1.21725C1.27162 14.4252 1.36454 14.4859 1.41089 14.5323C1.41727 14.5395 1.41669 14.5384 1.42529 14.5471C1.69724 14.8183 1.89506 15.1548 1.99983 15.5244C1.749 15.3818 1.51855 15.2061 1.3147 15.0019ZM21.1993 10.9161C21.1993 9.83417 20.3191 8.95398 19.2372 8.95398C18.1553 8.95398 17.2751 9.83417 17.2751 10.9161C17.2751 11.998 18.1553 12.8782 19.2372 12.8782C20.3191 12.8782 21.1993 11.998 21.1993 10.9161ZM18.3298 10.9161C18.3298 10.4157 18.7368 10.0087 19.2372 10.0087C19.7375 10.0087 20.1446 10.4157 20.1446 10.9161C20.1446 11.4164 19.7375 11.8235 19.2372 11.8235C18.7368 11.8235 18.3298 11.4164 18.3298 10.9161Z" />
                              </g>
                            </svg>
                          </div>
                          <TourCategoryDropdown style="style-2" noScroll="two" labelType="Activities Type" data={['Adventure','Cultural','Historical']} />
                          
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23">
                              <g clipPath="url(#clip0_2037_326)">
                                <path d="M15.5978 13.5309L12.391 11.1258V6.22655C12.391 5.73394 11.9928 5.33575 11.5002 5.33575C11.0076 5.33575 10.6094 5.73394 10.6094 6.22655V11.5713C10.6094 11.8519 10.7412 12.1164 10.9657 12.2839L14.5288 14.9563C14.6826 15.0721 14.8699 15.1346 15.0624 15.1344C15.3341 15.1344 15.6013 15.0124 15.7759 14.7772C16.0717 14.3843 15.9916 13.8258 15.5978 13.5309Z" />
                                <path d="M11.5 0C5.15851 0 0 5.15851 0 11.5C0 17.8415 5.15851 23 11.5 23C17.8415 23 23 17.8415 23 11.5C23 5.15851 17.8415 0 11.5 0ZM11.5 21.2184C6.14194 21.2184 1.78156 16.8581 1.78156 11.5C1.78156 6.14194 6.14194 1.78156 11.5 1.78156C16.859 1.78156 21.2184 6.14194 21.2184 11.5C21.2184 16.8581 16.8581 21.2184 11.5 21.2184Z" />
                              </g>
                            </svg>
                          </div>
                          <DateRange label="Activite Day" style="style-2"/>
                        
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <g clipPath="url(#clip0_273_1754)">
                                <path d="M13.3207 14.07C13.4615 14.163 13.6265 14.2126 13.7952 14.2127C14.0765 14.2127 14.3521 14.0761 14.5173 13.8238C14.7799 13.4251 14.6699 12.8893 14.2712 12.6268C12.4344 11.4175 11.4549 10.0781 11.189 8.413C11.0664 7.63051 11.2293 6.44276 11.8788 5.68373C12.3 5.19189 12.8555 4.95227 13.5776 4.95227C14.9937 4.95227 15.5731 5.95799 15.7926 6.55698C16.3228 8.00211 15.8852 9.80108 14.7761 10.7403C14.4116 11.0492 14.3666 11.5944 14.6745 11.958C14.9834 12.323 15.5281 12.3679 15.8922 12.0596C17.5541 10.6528 18.1943 8.0887 17.415 5.96263C16.787 4.2484 15.3522 3.22491 13.5775 3.22491C12.3552 3.22491 11.3134 3.6868 10.5651 4.56052C9.4864 5.82268 9.30716 7.56876 9.48218 8.68299C9.93995 11.5476 11.8924 13.1293 13.3207 14.07Z" />
                                <path d="M20.1255 22.0477H7.78708C7.81845 18.178 8.05759 17.0286 8.16475 16.7076C8.40062 16.0014 9.36979 15.275 10.2183 14.8006C10.9848 16.008 12.2021 16.7277 13.555 16.7277H13.5555C14.893 16.7272 16.0999 16.008 16.8628 14.801C17.7112 15.2756 18.679 16.0019 18.9144 16.7072C19.2186 17.6211 19.2013 18.9062 19.1873 19.9386C19.1845 20.1506 19.1816 20.3528 19.1816 20.5404C19.1816 21.0178 19.5682 21.4044 20.0455 21.4044C20.5229 21.4044 20.9095 21.0178 20.9095 20.5404C20.9095 20.3603 20.9123 20.166 20.915 19.962C20.9314 18.7991 20.9515 17.3521 20.5538 16.1601C19.9014 14.2048 17.1333 12.9862 16.8197 12.8538C16.714 12.8088 16.6003 12.7854 16.4853 12.7851C16.3704 12.7848 16.2565 12.8075 16.1505 12.8519C16.0445 12.8962 15.9485 12.9613 15.8679 13.0431C15.7873 13.125 15.7238 13.2221 15.6811 13.3287C15.2628 14.3747 14.4681 14.9995 13.5555 14.9995H13.5551C12.6378 14.9995 11.8123 14.3592 11.3995 13.3287C11.3568 13.2221 11.2933 13.125 11.2128 13.0431C11.1322 12.9613 11.0361 12.8963 10.9301 12.8519C10.8241 12.8076 10.7103 12.7849 10.5953 12.7853C10.4804 12.7856 10.3667 12.8089 10.2609 12.8538C9.94784 12.9862 7.17923 14.2044 6.52593 16.1606C6.21422 17.0965 6.05655 19.3681 6.05655 22.9113C6.05655 23.3886 6.44313 23.7752 6.92047 23.7752H20.1261C20.603 23.7752 20.9896 23.3891 20.9896 22.9118C20.9895 22.4343 20.6029 22.0477 20.1255 22.0477ZM5.3695 13.815C4.171 13.815 3.19618 12.5608 3.19618 11.0197C3.19618 9.48001 4.171 8.22724 5.3695 8.22724C5.98304 8.22724 6.59094 8.58197 6.95596 9.15243C7.22315 9.57034 7.58495 10.459 7.00463 11.7166C6.80478 12.1499 6.99387 12.6628 7.42723 12.8631C7.86106 13.0625 8.37352 12.8739 8.57332 12.4405C9.24909 10.9762 9.18966 9.43888 8.41048 8.22118C7.72069 7.14343 6.58393 6.49993 5.36903 6.49993C3.21817 6.49993 1.46835 8.52724 1.46835 11.0197C1.46835 13.5136 3.21817 15.5423 5.36903 15.5423C5.84636 15.5423 6.23342 15.1562 6.23342 14.6789C6.23337 14.2015 5.84684 13.815 5.3695 13.815ZM4.27767 21.2255H1.75991C1.7983 20.3701 1.87597 19.0981 2.01682 18.3503C2.19933 17.374 2.72444 16.8232 3.13296 16.533C3.52281 16.2569 3.61404 15.7178 3.33745 15.3289C3.06135 14.939 2.52268 14.8473 2.13331 15.1244C1.58578 15.5128 0.621729 16.4076 0.318939 18.0315C0.0680901 19.3639 0.00307088 21.9584 0.000223323 22.0679C-0.00239217 22.1831 0.0179889 22.2976 0.060174 22.4048C0.102359 22.512 0.165501 22.6097 0.245904 22.6922C0.326391 22.7746 0.422553 22.8401 0.528728 22.8848C0.634904 22.9294 0.748946 22.9524 0.86414 22.9524H4.27762C4.75496 22.9524 5.14154 22.5667 5.14154 22.0894C5.14159 21.6121 4.75501 21.2255 4.27767 21.2255ZM25.5327 11.0187C25.5327 8.52623 23.7829 6.49893 21.632 6.49893C20.4166 6.49893 19.2794 7.14195 18.5892 8.2197C17.81 9.43692 17.7501 10.9747 18.4249 12.439C18.6248 12.8719 19.1381 13.0619 19.571 12.8621C20.0039 12.6623 20.1939 12.1494 19.9941 11.716C19.4138 10.4581 19.7764 9.56986 20.0437 9.15191C20.4092 8.58144 21.0171 8.22671 21.6316 8.22671C22.8301 8.22671 23.8049 9.47953 23.8049 11.0192C23.8049 12.5602 22.8301 13.8145 21.6316 13.8145C21.1542 13.8145 20.7677 14.201 20.7677 14.6784C20.7677 15.1557 21.1542 15.5423 21.6316 15.5423C23.7819 15.5423 25.5322 13.5136 25.5327 11.0187ZM26.6811 18.0334C26.39 16.4624 25.4746 15.5769 24.9552 15.1894C24.5728 14.9049 24.0313 14.9825 23.7459 15.3649C23.4609 15.7473 23.5395 16.2892 23.9214 16.5742C24.3093 16.8634 24.8078 17.4053 24.9828 18.3511C25.1236 19.098 25.2013 20.3695 25.2397 21.2245H22.7215C22.2441 21.2245 21.8575 21.6111 21.8575 22.0885C21.8575 22.5658 22.2441 22.9524 22.7215 22.9524H26.1359C26.3685 22.9524 26.5912 22.8588 26.7545 22.6917C26.8349 22.6092 26.8979 22.5115 26.94 22.4043C26.9821 22.2971 27.0024 22.1826 26.9997 22.0674C26.997 21.9579 26.9324 19.3629 26.6811 18.0334Z" />
                              </g>
                            </svg>
                          </div>
                          <div className="searchbox-input">
                            <label>Traveler</label>
                            4
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="tab-pane fade" id="transport" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row g-xl-4 gy-4">
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <path d="M18.0075 17.8392C20.8807 13.3308 20.5195 13.8933 20.6023 13.7757C21.6483 12.3003 22.2012 10.5639 22.2012 8.75391C22.2012 3.95402 18.3062 0 13.5 0C8.7095 0 4.79883 3.94622 4.79883 8.75391C4.79883 10.5627 5.3633 12.3446 6.44361 13.8399L8.99237 17.8393C6.26732 18.2581 1.63477 19.506 1.63477 22.2539C1.63477 23.2556 2.28857 24.6831 5.40327 25.7955C7.57814 26.5722 10.4536 27 13.5 27C19.1966 27 25.3652 25.3931 25.3652 22.2539C25.3652 19.5055 20.7381 18.2589 18.0075 17.8392ZM7.76508 12.9698C7.75639 12.9562 7.7473 12.9428 7.73782 12.9298C6.83886 11.6931 6.38086 10.2274 6.38086 8.75391C6.38086 4.79788 9.56633 1.58203 13.5 1.58203C17.4255 1.58203 20.6191 4.7993 20.6191 8.75391C20.6191 10.2297 20.1698 11.6457 19.3195 12.8498C19.2432 12.9503 19.6408 12.3327 13.5 21.9686L7.76508 12.9698ZM13.5 25.418C7.27766 25.418 3.2168 23.589 3.2168 22.2539C3.2168 21.3566 5.30339 19.8811 9.92714 19.306L12.8329 23.8656C12.9044 23.9777 13.0029 24.0701 13.1195 24.134C13.2361 24.198 13.367 24.2315 13.4999 24.2315C13.6329 24.2315 13.7638 24.198 13.8804 24.134C13.9969 24.0701 14.0955 23.9777 14.167 23.8656L17.0727 19.306C21.6966 19.8811 23.7832 21.3566 23.7832 22.2539C23.7832 23.5776 19.7589 25.418 13.5 25.418Z" />
                              <path d="M13.5 4.79883C11.3192 4.79883 9.54492 6.57308 9.54492 8.75391C9.54492 10.9347 11.3192 12.709 13.5 12.709C15.6808 12.709 17.4551 10.9347 17.4551 8.75391C17.4551 6.57308 15.6808 4.79883 13.5 4.79883ZM13.5 11.127C12.1915 11.127 11.127 10.0624 11.127 8.75391C11.127 7.44541 12.1915 6.38086 13.5 6.38086C14.8085 6.38086 15.873 7.44541 15.873 8.75391C15.873 10.0624 14.8085 11.127 13.5 11.127Z" />
                            </svg>
                          </div>
                          <DestinationSearch destination="Form" style="style-2" />
                        
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                              <path d="M18.0075 17.8392C20.8807 13.3308 20.5195 13.8933 20.6023 13.7757C21.6483 12.3003 22.2012 10.5639 22.2012 8.75391C22.2012 3.95402 18.3062 0 13.5 0C8.7095 0 4.79883 3.94622 4.79883 8.75391C4.79883 10.5627 5.3633 12.3446 6.44361 13.8399L8.99237 17.8393C6.26732 18.2581 1.63477 19.506 1.63477 22.2539C1.63477 23.2556 2.28857 24.6831 5.40327 25.7955C7.57814 26.5722 10.4536 27 13.5 27C19.1966 27 25.3652 25.3931 25.3652 22.2539C25.3652 19.5055 20.7381 18.2589 18.0075 17.8392ZM7.76508 12.9698C7.75639 12.9562 7.7473 12.9428 7.73782 12.9298C6.83886 11.6931 6.38086 10.2274 6.38086 8.75391C6.38086 4.79788 9.56633 1.58203 13.5 1.58203C17.4255 1.58203 20.6191 4.7993 20.6191 8.75391C20.6191 10.2297 20.1698 11.6457 19.3195 12.8498C19.2432 12.9503 19.6408 12.3327 13.5 21.9686L7.76508 12.9698ZM13.5 25.418C7.27766 25.418 3.2168 23.589 3.2168 22.2539C3.2168 21.3566 5.30339 19.8811 9.92714 19.306L12.8329 23.8656C12.9044 23.9777 13.0029 24.0701 13.1195 24.134C13.2361 24.198 13.367 24.2315 13.4999 24.2315C13.6329 24.2315 13.7638 24.198 13.8804 24.134C13.9969 24.0701 14.0955 23.9777 14.167 23.8656L17.0727 19.306C21.6966 19.8811 23.7832 21.3566 23.7832 22.2539C23.7832 23.5776 19.7589 25.418 13.5 25.418Z" />
                              <path d="M13.5 4.79883C11.3192 4.79883 9.54492 6.57308 9.54492 8.75391C9.54492 10.9347 11.3192 12.709 13.5 12.709C15.6808 12.709 17.4551 10.9347 17.4551 8.75391C17.4551 6.57308 15.6808 4.79883 13.5 4.79883ZM13.5 11.127C12.1915 11.127 11.127 10.0624 11.127 8.75391C11.127 7.44541 12.1915 6.38086 13.5 6.38086C14.8085 6.38086 15.873 7.44541 15.873 8.75391C15.873 10.0624 14.8085 11.127 13.5 11.127Z" />
                            </svg>
                          </div>
                          <DestinationSearch destination="To" style="style-2" />
                         
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23">
                              <g clipPath="url(#clip0_2037_326)">
                                <path d="M15.5978 13.5309L12.391 11.1258V6.22655C12.391 5.73394 11.9928 5.33575 11.5002 5.33575C11.0076 5.33575 10.6094 5.73394 10.6094 6.22655V11.5713C10.6094 11.8519 10.7412 12.1164 10.9657 12.2839L14.5288 14.9563C14.6826 15.0721 14.8699 15.1346 15.0624 15.1344C15.3341 15.1344 15.6013 15.0124 15.7759 14.7772C16.0717 14.3843 15.9916 13.8258 15.5978 13.5309Z" />
                                <path d="M11.5 0C5.15851 0 0 5.15851 0 11.5C0 17.8415 5.15851 23 11.5 23C17.8415 23 23 17.8415 23 11.5C23 5.15851 17.8415 0 11.5 0ZM11.5 21.2184C6.14194 21.2184 1.78156 16.8581 1.78156 11.5C1.78156 6.14194 6.14194 1.78156 11.5 1.78156C16.859 1.78156 21.2184 6.14194 21.2184 11.5C21.2184 16.8581 16.8581 21.2184 11.5 21.2184Z" />
                              </g>
                            </svg>
                          </div>
                          <DateRange label="Journey date" style="style-2"/>
                        
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                        <div className="single-search-box">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23">
                              <g clipPath="url(#clip0_2037_326)">
                                <path d="M15.5978 13.5309L12.391 11.1258V6.22655C12.391 5.73394 11.9928 5.33575 11.5002 5.33575C11.0076 5.33575 10.6094 5.73394 10.6094 6.22655V11.5713C10.6094 11.8519 10.7412 12.1164 10.9657 12.2839L14.5288 14.9563C14.6826 15.0721 14.8699 15.1346 15.0624 15.1344C15.3341 15.1344 15.6013 15.0124 15.7759 14.7772C16.0717 14.3843 15.9916 13.8258 15.5978 13.5309Z" />
                                <path d="M11.5 0C5.15851 0 0 5.15851 0 11.5C0 17.8415 5.15851 23 11.5 23C17.8415 23 23 17.8415 23 11.5C23 5.15851 17.8415 0 11.5 0ZM11.5 21.2184C6.14194 21.2184 1.78156 16.8581 1.78156 11.5C1.78156 6.14194 6.14194 1.78156 11.5 1.78156C16.859 1.78156 21.2184 6.14194 21.2184 11.5C21.2184 16.8581 16.8581 21.2184 11.5 21.2184Z" />
                              </g>
                            </svg>
                          </div>
                          <DateRange label="Return date" style="style-2"/>
                     
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="slider-btn-grp">
    <div className="slider-btn home1-banner-prev">
      <i className="bi bi-arrow-left" />
    </div>
    <div className="slider-btn home1-banner-next">
      <i className="bi bi-arrow-right" />
    </div>
  </div>
</div>

</div> 
 








 
    </>
  )
}

export default Home2Banner
