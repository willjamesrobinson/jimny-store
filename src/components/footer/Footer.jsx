import React from 'react';
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.clogo}>
          <img src={Logo} alt="" />
          <span></span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon}/>
              <span>123 Jimny Road, Jimtown, VIC</span>
            </span>

            <span>
              <PhoneIcon className={css.icon} />
              <a href=""> 0444 123 456</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="">jimnybits@suzuki.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon}/>
              <span>Sign in</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon}/>
              <span>About us</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon}/>
              <span>Terms of Service</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
