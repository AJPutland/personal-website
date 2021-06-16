import React,{Component} from 'react';
import * as styles from './projects.module.scss';

import ThisWebsitemp4 from '../../videos/ThisWebsite.mp4'
import UsedCarsmp4 from '../../videos/UsedCarsEDAandML.mp4'


export default class Projects extends Component<any,any>{
    render() {
        return (
              <div ref={this.props.refProp} id="projects" className={styles.projects}>
                    <h1>Projects</h1>
                    <ul className={styles.projectList}>
                        <li>
                            <a onMouseOver={() => document.getElementById("thisWebsite").play()} onMouseOut={() => {document.getElementById("thisWebsite").pause()}} href="https://github.com/AJPutland/personal-website">
                                <video disableRemotePlayback id="thisWebsite" loop muted playsInline>
                                    <source src={ThisWebsitemp4} type="video/mp4"/>
                                </video>
                                <div className={styles.darkBackground}>
                                    <h2>personal-website</h2>
                                    <p>I built this website using GatsbyJS and REACT, with automatic deployment to Netlify</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a onMouseOver={() => document.getElementById("usedCars").play()} onMouseOut={() => {document.getElementById("usedCars").pause()}} href="https://github.com/AJPutland/used-cars-ML">
                                <video disableRemotePlayback id="usedCars" loop muted playsInline>
                                    <source src={UsedCarsmp4} type="video/mp4"/>
                                </video>
                                <div className={styles.lightBackground}>
                                    <h2>used-cars-ML</h2>
                                    <p>A machine learning project to predict the price of used cars on craigslist</p>
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