import React, {useEffect, useState} from 'react';
import './Works.css';
import portfolio from "../../data.js";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


const Works = () => {
    const { t } = useTranslation();
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
            <h1 >{t('MyWorks.1')}<span> {t('MyWorks.2')}</span></h1>
            <div className='works-header'>
                <NavLink  exact={true} to="/"  onClick={() => {
                    setFilter("all") ;
                }}>
                    {t('MyWorks.3')}
                </NavLink>
                <NavLink to="e-commerce" exact={true}
                     onClick={() => setFilter("e-commerce")}>{t('MyWorks.4')}
                </NavLink>
                <NavLink to="catalogue" exact={true}
                     onClick={() => setFilter("catalogue")}>{t('MyWorks.5')}
                </NavLink>
                <NavLink to="restaurant" exact={true}
                    onClick={() => setFilter("cafe&restaurant")}>{t('MyWorks.6')}
                </NavLink>
                <NavLink to="education" exact={true}
                     onClick={() => setFilter("education")}>{t('MyWorks.7')}
                </NavLink>
            </div>

            <div className='works-img'>
                {projects.map(item =>
                item.filtered === true ?
                        <div key={item.id} className="hover01 column " data-aos='fade-up'>
                            <div>
                                <div>
                                    <a href={item.address} rel='noreferrer' target='_blank'>
                                        <img src={item.img} alt='portfolio websites' />
                                    </a>
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


