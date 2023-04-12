import React from "react"
import { Link } from "react-router-dom"
import Hero from './stories/hero1.jpg'
import Plan from "./stories/Group 25.png"
import Pricingplan from './Home/Pricingplan'
import Pricingplan2 from './Home/Pricingplan2'
import img5 from './desktop/Group 7.png'
import Bitmap from './stories/Bitmap.jpg'
import Delay from "react-delay";
import Loading from "./Loading"


function ToggleButton(props) {
    const { onClick } = props;
    const [active, setActive] = React.useState(false);
  
    const handleClick = () => {
      setActive(!active);
      if (onClick) {
        onClick(!active);
      }
    };
  
    return (
        <div className="pricing--button" style={{display: 'flex',justifyContent:'center',alignItems:"center",marginTop:'120px'}}>
            <h3 style={{ margin: 0, marginRight: '32px', color: active ? 'gray' : 'black' }}>Monthly</h3>
            <div className={`toggle-container ${active ? 'night' : 'day'}`} onClick={handleClick}>
                <div className="toggle-button">
                <div className="toggle-button-circle"></div>
                </div>
            </div>
            <h3 style={{ margin: 0, marginLeft: '32px', color: active ? 'black' : 'gray' }}>Yearly</h3>
        </div>
    );
  }




export default function Pricing() {
    const [position, setPosition] = React.useState('left');

    const handleToggle = (active) => {
      setPosition(active ? 'right' : 'left');
    };
    return (
        <Delay wait={250} fallback={Loading}>

            <div className="about-page-container">
            <div className="container" >
                <div className="text">
                    <div>
                        <h1>PRICING</h1>
                        <h2>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</h2>
                    </div>
                </div>
                <img className="image" src={Hero}/>
            </div>
            

            <div className="App">
                
                <ToggleButton leftLabel="Pricing Plan 1" rightLabel="Pricing Plan 2" onClick={handleToggle} />
                {position === 'left' && <Pricingplan />}
                {position === 'right' && <Pricingplan2 />}
            </div>
            <div className='pircing--Bottom' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:'100px',paddingBottom:'100px' }}>
                <h3>COMPARE</h3>
                <img style={{ width: "602px",marginTop:'50px'}} src={Plan} alt="comparison plan" />
            </div>
            <div style={{position: 'relative',marginBottom:'-88px'}} >
                <img src={Bitmap} style={{width:'100%'}}/>
                <h1  className='feature--h1' style={{position: 'absolute', left: '10%', top: '40%', transform: 'translateY(-50%)',color:'white', width:'400px'}}>WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>
                <Link to="" className="Invite--class" style={{position: 'absolute', right: '7.2%', top: '40%',color:'white'}}>
                    <h4 >GET AN INVITE</h4>
                    <img src={img5} style={{width: '42px',paddingLeft:"10px"}}/>
                </Link>
            </div>
            </div>
        </Delay>

    );
}