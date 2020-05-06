import React from 'react'
import classes from './footer.module.css'
export default function Footer() {
    return (
        <div className={classes.Footer}>
              <div className={classes.InnerDiv} >© 2020 Copyright:
                    <a href="/"> Sainty Apps</a>
               </div>
        </div>
    )
}
