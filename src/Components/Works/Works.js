import React, {useEffect, useState} from 'react';
import './Works.css';
import portfolio from "../../data";
import {NavLink} from "react-router-dom";


const Works = () => {
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);


    return (
        <div className='works' id='portfolio' >
            <h1 >MY <span> WORKS</span></h1>
            <div className='works-header'>
                <NavLink  exact={true} to="/"  onClick={() => {
                    setFilter("all") ;
                }}>
                    All
                </NavLink>
                <NavLink to="commerce" exact={true}
                     onClick={() => setFilter("commerce")}>E-commerce
                </NavLink>
                <NavLink to="catalogue" exact={true}
                     onClick={() => setFilter("catalogue")}>Catalogue
                </NavLink>
                <NavLink to="restaurant" exact={true}
                    onClick={() => setFilter("cafe&restaurant")}>Cafe & Restaurant
                </NavLink>
                <NavLink to="education" exact={true}
                     onClick={() => setFilter("education")}>Education
                </NavLink>
            </div>

            <div className='works-img'>
                {projects.map(item =>
                item.filtered === true ?
                        <div key={item.name} className="hover01 column " data-aos='fade-up'>
                            <div>
                                <div>
                                    <img src={item.img} alt='portfolio websites'/>
                                </div>
                            </div>
                        </div>
                        : ""
                )}
            </div>
        </div>
    );
};

export default Works;


