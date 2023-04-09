import React from "react"

export default function Pricingplan() {
    return (
        <div className="about-page-container" style={{display:"flex",justifyContent:'center',marginTop:'48px'}}>
            <div className="Pricingplan--div" style={{width:'350px', display: 'flex', flexDirection: 'column', alignItems: 'center',height:'407px'}}>
                <h2>Basic</h2>
                <h3 style={{textAlign: 'center',width:'270px'}}>Includes basic usage of our platform. Recommended for new and aspiring photographers.</h3>
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'0',padding:'0'}}>
                    <h1 style={{marginBottom:'0'}}>$190.00</h1>
                    <h3 style={{marginTop:'0'}}>per year</h3>
                </span>
                <button>PICK PLAN</button>
            </div>
            <div  className="Pricingplan--div" style={{width:'350px', display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:'black',color:'white'}}>
                <h2>Pro</h2>
                <h3 style={{textAlign: 'center',width:'270px'}}>More advanced features available. Recommended for photography veterans and professionals.</h3>
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'0',padding:'0'}}>
                    <h1 style={{marginBottom:'0'}}>$390.00</h1>
                    <h3 style={{marginTop:'0'}}>per year</h3>
                </span>
                <button  className="mid--button" style={{backgroundColor:'white',color:'black'}}>PICK PLAN</button>
            </div>
            <div className="Pricingplan--div" style={{width:'350px', display: 'flex', flexDirection: 'column', alignItems: 'center',height:'407px'}}>
                <h2>Business</h2>
                <h3 style={{textAlign: 'center',width:'270px'}}>Additional features available such as more detailed metrics. Recommended for business owners.</h3>
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'0',padding:'0'}}>
                    <h1 style={{marginBottom:'0'}}>$990.00</h1>
                    <h3 style={{marginTop:'0'}}>per year</h3>
                </span>
                <button>PICK PLAN</button>
            </div>
            
        </div>
    );
}