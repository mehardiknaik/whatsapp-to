import { Typography } from "@mui/material"
import logo from '../images/logo.png';
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.Container}>
            <img  src={logo} width={35} height={35} alt=""/>
           <Typography variant="h5" color={'#babdba'}>WhatsApp To</Typography> 
        </div>
    )
}

export default Header
