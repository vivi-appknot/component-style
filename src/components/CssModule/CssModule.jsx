import React from 'react';
import styles from './CssModule.module.scss';


const CssModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.large}`}>
            <h1 className={styles.title}>CSS Module 테스트입니당</h1>
        </div>
    );
};

export default CssModule;