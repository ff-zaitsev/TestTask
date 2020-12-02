import React from "react";
import classes from "./Footer.module.css"

const Footer = () => {
    return (
    <div>
        <div>
            <svg width="414" height="1" viewBox="0 0 560 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H560V1H0V0Z" fill="#D6D7D9"/>
            </svg>
        </div>
        <div className={classes.footer}>
                This email was sent to you as a registered member of prfctfit.com. To update your emails preferences <a href={"#"}>click here</a><br />
                Use of the service and website is subject to our <a href={"#"}>Terms of Use</a> and <a href={"#"}>Privacy Statement</a>.<br /><br />
                © 2020 PRFCT FIT. All rights reserved
            </div>
    </div>
    )
}

export default Footer