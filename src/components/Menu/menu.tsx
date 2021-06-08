import React,{Component} from 'react';
import * as styles from './menu.module.scss';
import { HomeState } from '../../pages/index';
import github from '../../images/github.svg';
import LinkedIn from '../../images/linkedIn.svg';

export interface MenuProps extends HomeState{
    toggleMenuFn:() => void;
}

export default class Menu extends Component<MenuProps,{}> {
    render() {
        return (
            <nav className={this.props.toggleMenu ? styles.menu + ' '+styles.toggled: styles.menu} role="navigation">
                <ul>
                    <li><button onClick={() => {window.scroll({top: 0, behavior: 'smooth' }); this.props.toggleMenuFn()}} >About Me</button></li>
                    <li><button onClick={() => {window.scroll({top: this.props.projectsRef.current.offsetTop-40, behavior:'smooth'}); this.props.toggleMenuFn()}}>Projects</button></li>
                    <li><button onClick={() => {window.scroll({top: this.props.contactRef.current.offsetTop-40, behavior:'smooth'}); this.props.toggleMenuFn()}}>Contact Me</button></li>
                    <li><a href="https://github.com/AJPutland"> <img src={github} alt="github"/>Github</a></li>
                    <li><a href="https://www.linkedin.com/in/adam-putland-173717191/"><img src={LinkedIn} alt="LinkedIn"/>LinkedIn</a></li>
                </ul>
            </nav>
        )
    }
}