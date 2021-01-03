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
                <NavLink  exact={true} to="/" activeClassName="active"  active={filter === "all"} onClick={() => {
                    setFilter("all");
                }}>
                    All
                </NavLink>
                <NavLink exact={true} to="commerce"  active={filter === "commerce"}
                     onClick={() => setFilter("commerce")}>E-commerce
                </NavLink>
                <NavLink exact={true} to="catalogue"  active={filter === "catalogue"}
                     onClick={() => setFilter("catalogue")}>Catalogue
                </NavLink>
                <NavLink exact={true} to="restaurant" active={filter === "cafe&restaurant"}
                    onClick={() => setFilter("cafe&restaurant")}>Cafe & Restaurant
                </NavLink>
                <NavLink exact={true} to="education"  active={filter === "education"}
                     onClick={() => setFilter("education")}>Education
                </NavLink>
            </div>

            <div className='works-img'>
                {projects.map(item =>
                    item.filtered === true ?

                        <div key={item.name} className="hover01 column " data-aos='fade-up'>
                            <div>
                                <div>
                                    <img src={item.img} alt=''/>
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


