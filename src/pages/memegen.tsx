import Header from '../components/Header/header'
import MemeGenerator from '../components/MemeGenerator/memegenerator'
import styles from './memegen.module.scss';

const MemeGen = () => {
    return (<div className={styles.pagecontainer}>
        <Header />
        <MemeGenerator />
    </div>);
}

export default MemeGen;