import styles from './header.module.scss'
import Image from 'next/image'
import logo from '../../public/images/Troll Face.svg'

const Header = () => {
    return (

        <header className={styles.outercontainer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={logo} width={31.31} height={26.22} alt="Meme Generator" />
                    <p className={styles.logo__name}>MemeGenerator</p>
                </div>
                <p className={styles.title}>React Course - Project 3</p>
            </div>
        </header>

    );
}

export default Header;

