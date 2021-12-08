import React from 'react';
import classNames from 'classnames/bind';
import styles from './CssModule.module.scss';

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아오도록 설정

const ClassName = () => {
    return (
        <div className={cx('wrapper', 'large')}>
            <h1 className={cx('title')}>CSS Module + ClassName 라이브러리 테스트입니당</h1>
        </div>
    );
};

export default ClassName;