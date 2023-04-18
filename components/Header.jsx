import React from "react"
import { Link, NavLink } from "react-router-dom"
import triangle from "./images/Path 2.png"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">
                <div> 
                    <img src={triangle}/>
                    <h2>PHOTOSNAP</h2>
                </div>

            </Link>
            <nav>
                <NavLink 
                    to="stories"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    STORIES
                </NavLink>
                <NavLink 
                    to="features"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    FEATURES
                </NavLink>
                <NavLink 
                    to="pricing"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    PRICING
                </NavLink>
                <button >
                    <h4>GET AN INVITE</h4>
                </button>
            </nav>
        </header>
    )
}