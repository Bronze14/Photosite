import React from "react"
import Homesite from './Home/Homesite'
import Homesite2 from './Home/Homesite2'
import img1 from './desktop/create-and-share.jpg'
import img2 from './desktop/beautiful-stories.jpg'
import img3 from './desktop/designed-for-everyone.jpg'
import data from '../data.js'
import img4 from './desktop/Group 6.png'
import img5 from './desktop/Group 7.png'
import { Link, useLoaderData, Await } from "react-router-dom"
import Delay from "react-delay";
import Loading from "./Loading"


export default function Home() {
    const loaderData = useLoaderData()

    return (
        <Delay wait={250} fallback={<h1>sdfojmsdgjgfsdiknojfgijkopfdg</h1>}>
            
            <div className="home-container">
                <div className="container">
                    <div className="text">
                        <div>
                            <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
                            <h2>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</h2>
                            <Link to="pricing"  className="Invite--class">
                                <h4>GET AN INVITE</h4>
                                <img src={img5} style={{width: '42px'}}/>
                            </Link>
                        </div>
                    </div>
                    <img className="image" src={img1}/>
                </div>
                <div className="container2">
                    <div className="text2">
                        <div>
                            <h1>BEAUTIFUL STORIES EVERY TIME</h1>
                            <h2>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</h2>
                            <Link href="stories" className="Invite--class">
                                <h4>VIEW THE STORIES</h4>
                                <img src={img4} style={{width: '42px'}}/>
                            </Link>
                        </div>
                    </div>
                    <img className="image2" src={img2}/>
                </div>
                <div className="container3">
                    <div className="text3">
                        <div>
                            <h1>DESIGNED FOR EVERYONE</h1>
                            <h2>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.</h2>
                            <Link href="stories" className="Invite--class">
                                <h4>VIEW THE STORIES</h4>
                                <img src={img4} style={{width: '42px'}}/>
                            </Link>
                        </div>
                    </div>
                    <img className="image3" src={img3}/>
                </div>

                
                        <div style={{flexdirection: "row",width: "100%", display:"flex"}}>
                            <Await resolve={loaderData}>{data.map(item => <Homesite key={item.id} data={item} />)}</Await>
                        </div>
                
                <Homesite2 />
            </div>
        </Delay>

    )
};