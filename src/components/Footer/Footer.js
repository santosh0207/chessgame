import React from 'react'
import classes from './footer.module.css'
export default function Footer() {
    return (
        <div className={classes.Footer}>
              <div className={classes.InnerDiv} >© 2020 Copyright:
                    <a href="https://www.facebook.com/kewatsantosh" target="_blank"> Sainty Apps</a>
               </div>
        </div>
    )
}
