import React,{Component} from 'react';
import * as styles from './projects.module.scss';

export default class Projects extends Component<any,any>{
    render() {
        return (
              <div ref={this.props.refProp} id="projects" className={styles.projects}>
                    <h1>Projects</h1>
                    <ul className={styles.projectList}>
                        <li className={styles.reactWebsite}>
                            <a href="https://github.com/AJPutland/me">
                                <div className={styles.reactImage}/>
                                <div className={styles.reactText}>
                                    <h2>This Website</h2>
                                    <p>I built this website using React, Typescript and SASS, hosted using Github pages</p>
                                </div>
                            </a>
                        </li>
                        <li className={styles.usedCarsEDAandML}>
                            <a href="https://github.com/AJPutland/UsedCarsEDAandML">
                                <div className={styles.reactImage}/>
                                <div className={styles.reactText}>
                                    <h2>Used Cars EDA and machine learning</h2>
                                    <p>Repository of machine learning project to predict price of used cars</p>
                                </div>
                            </a>
                        </li>
                        <li className={styles.more}><h2>More coming soon...</h2></li>
                        <li className={styles.more}><h2>More coming soon...</h2></li>
                    </ul>
                </div>
        );
    }
}