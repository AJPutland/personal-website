/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, {Component}  from 'react';
import * as styles from './header.module.scss';
import github from '../../images/github.svg';
import LinkedIn from '../../images/linkedIn.svg';
import { HomeState } from '../../pages/index';

export interface HeaderProps extends HomeState{
    toggleMenuFn:() => void;
}

export default class Header extends Component<HeaderProps,{}>{
    render(){
        return (
            <div className={this.props.toggleMenu ? styles.header+' '+styles.toggled : styles.header}>
                <button className={styles.title} onClick={() => window.scroll({top: 0, behavior: 'smooth' })} >Adam J. Putland</button>
                <ul className={styles.linksList}>
                    <li>
                        <a href="https://github.com/AJPutland">
                            <img src={github} alt="github"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/adam-putland-173717191/">
                            <img src={LinkedIn} alt="LinkedIn"/>
                        </a>
                    </li>
                </ul>
                <ul className={styles.headerList}>
                    <li><button className={this.props.pageLoc==="about" ? styles.active:styles.notactive} onClick={() => window.scroll({top: 0, behavior: 'smooth' })} >About</button></li>
                    <li><button className={this.props.pageLoc==="projects" ? styles.active:styles.notactive} onClick={() =>window.scroll({top: this.props.projectsRef.current.offsetTop-40, behavior:'smooth'})} >Projects</button></li>
                    <li><button className={this.props.pageLoc==="contact" ? styles.active:styles.notactive} onClick={() => window.scroll({top: this.props.contactRef.current.offsetTop-40, behavior:'smooth'})} >Contact</button></li>
                </ul>
                <button className={this.props.toggleMenu ? styles.dropdownMenu+' '+styles.toggled : styles.dropdownMenu} onClick={this.props.toggleMenuFn}>
                    <span />
                    <span />
                </button>
            </div>
        );
    }
}