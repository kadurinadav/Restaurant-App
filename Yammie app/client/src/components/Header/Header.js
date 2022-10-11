import {Fragment} from 'react'

import wallpaper from '../../assets/wallpaper.jpg'
import classes from './Header.module.css'

const Header = (props)=> {
    return <Fragment>
        <header className= {classes.header}> 
            <h1> Yammie Restaurant </h1>
        </header>
            <div className= {classes['main-image']}>
                <img src = {wallpaper} alt = "Best Restaurant In Town!" /> 
            </div>
    </Fragment>
}

export default Header;