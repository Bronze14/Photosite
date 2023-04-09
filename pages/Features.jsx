import React, { lazy, Suspense } from 'react';
import { Link } from "react-router-dom"
import Hero from './stories/Hero.jpg'
import Homesite2 from './Home/Homesite2'
import Homesite3 from './Home/Homesite3'
import Bitmap from './stories/Bitmap.jpg'
import img5 from './desktop/Group 7.png'
import Delay from "react-delay";
import Loading from "./Loading"

// define your lazy-loaded components
const LazyHomesite2 = lazy(() => import('./Home/Homesite2'));
const LazyHomesite3 = lazy(() => import('./Home/Homesite3'));

export default function Features() {
  return (
    <Suspense fallback={<Loading />}>
      <Delay wait={250}>
        <div style={{height:'1665px'}}>
          <div className="container">
            <div className="text">
              <div>
                <h1>FEATURES</h1>
                <h2>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</h2>
              </div>
            </div>
            <img className="image" src={Hero}/>
          </div>

          <Suspense fallback={<Loading />}>
            <LazyHomesite2 />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <LazyHomesite3 />
          </Suspense>

          <div style={{position: 'relative',marginTop:'100px'}} >
            <img src={Bitmap} style={{width:'100%'}}/>
            <h1  className='feature--h1' style={{position: 'absolute', left: '10%', top: '40%', transform: 'translateY(-50%)',color:'white', width:'400px'}}>WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>
            <Link to="" className="Invite--class" style={{position: 'absolute', right: '7.2%', top: '40%',color:'white'}}>
              <h4 >GET AN INVITE</h4>
              <img src={img5} style={{width: '42px',paddingLeft:"10px"}}/>
            </Link>
          </div>
        </div>
      </Delay>
    </Suspense>
  )
}