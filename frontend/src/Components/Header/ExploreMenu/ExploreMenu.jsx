import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../../Assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  console.log(category)
  return (
    <>
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>"Dive into our menu and discover a world of flavors crafted to satisfy every craving! From savory starters to mouth-watering mains and delightful desserts, each dish is made with the finest ingredients and a passion for taste. Explore our offerings and find your new favorite!"</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev === item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    </>
  )
}

export default ExploreMenu