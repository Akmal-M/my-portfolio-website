import React, {useEffect, useState} from 'react';
import './Works.css';
import portfolio from "../../data";


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
        <div className='works' id='portfolio'>
            <h1>MY WORKS</h1>
            <div className='works-header'>
                <h3 active={filter === "all"} onClick={() => setFilter("all")}>
                    All
                </h3>
                <h3  active={filter === "commerce"}
                     onClick={() => setFilter("commerce")}>E-commerce
                </h3>
                <h3  active={filter === "catalogue"}
                     onClick={() => setFilter("catalogue")}>Catalogue
                </h3>
                <h3 active={filter === "cafe&restaurant"}
                    onClick={() => setFilter("cafe&restaurant")}>Cafe & Restaurant
                </h3>
                <h3  active={filter === "education"}
                     onClick={() => setFilter("education")}>Education
                </h3>
            </div>

            <div className='works-img'>
                {projects.map(item =>
                    item.filtered === true ?

                        <div key={item.name} className="hover01 column " data-aos='fade-up'>
                            <div>
                                <div>
                                    <img src={item.img}/>
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
