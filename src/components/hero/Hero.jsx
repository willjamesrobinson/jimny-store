import React from 'react'
import css from "./Hero.module.css"
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'


const Hero = () => {
  return (
    <div className={css.container}>
        <div className={css.h_sides}>
            <span>Skin Creams</span>
            <div className={css.text2}>
                <span>Trendy</span>
                <span>Trendy blah bloop blaaah rendy blah bloop blaaah rendy blah bloop blaaah</span> 
            </div>

        </div>
        {/* middle side*/}
        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={HeroImg} alt="" width={600}/>
            <div className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.singup}>
                    <span>Best Signup Offers</span>

                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>
        {/* right side*/}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>100k</span>
                <span>Monthly traffic</span>
            </div>

            <div className={css.customers}>
                <span>100k</span>
                <span>Monthly traffic</span>
            </div>
            
        </div>
    </div>
  )
}

export default Hero