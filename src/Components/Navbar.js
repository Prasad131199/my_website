
import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
const Navbar = () => {
    const Nav = styled.nav`
    .navbar-list{
        display: flex;
        gap: 4.5rem;

        li {
            list-style:none;
        }
        .navbar-link{
            &:link{
                font-size:15px;
            },
            &: visited{
                display: inline-block;
                text-decoration: none;
                font-size; 10rem;
                text-transform: uppercase;
                color: ${({theme}) => theme.colors.black};
                transition: color 0.2s linear;
            }
             
            &:hover,
            &: active{
                color: ${({ theme }) => theme.colors.helper};
                
            }    
        }
    }
    
    `;
    return (
        <Nav>
            <div className='menuIcon'>
                <ul className='navbar-list'>
                    <li>
                        <NavLink className="navbar-link" to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/service">Service</NavLink>
                    </li>

                </ul>



            </div>
        </Nav>
    );




};

export default Navbar;