import React from "react"
import { Link, useLoaderData, Await } from "react-router-dom"
import Hazy from "./stories/moon-of-appalacia.jpg"
import img5 from './desktop/Group 7.png'
import Storiessite from './Home/Storiessite'
import dataImages from './data2.js'
import Delay from "react-delay";
import Loading from "./Loading"


export default function Stories() {
    const [data, setData] = React.useState(null);
    const loaderData = useLoaderData()
    React.useEffect(() => {
            setData(dataImages)
    })

    return (
        <Delay wait={250} fallback={Loading}>
            <div className="about-page-container" style={{dispaly:"flex",flexDirection: "column"}}>
                
                <div className="parent">
                    <img src={Hazy} alt="Hazy full moon of Appalachia"/>
                    <div className="child">
                        <h4 style={{marginBottom:'24px'}}>LAST MONTH’S FEATURED STORY</h4>
                        <h2 style={{marginBottom:'16px'}}>HAZY FULL MOON OF APPALACHIA</h2>
                        <span style={{display:'flex',marginBottom:'16px'}}>
                            <h5>March 2nd 2020</h5>
                            <h5 style={{color:"#FFFFFF", marginLeft:'5px'}}>by John Appleseed</h5>
                        </span>
                        <h5 style={{marginBottom:'24px'}}>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</h5>
                        <Link href="" className="Invite--class">
                            <h4>READ THE STORIES</h4>
                            <img src={img5} style={{width: '42px'}}/>
                        </Link>
                    </div>
                </div>

                
                        <div  className="niewiem"style={{display:'flex',flexWrap: "wrap", width: "100%",height:'1912px'}}>
                            <Await >{dataImages.map(item => <Storiessite key={item.id} data={item} style={{width:"25%"}}/>)}</Await>
                        </div>
                
            </div>
        </Delay>
    );
}