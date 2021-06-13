import React,{Component} from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Panel from '../panel';
import * as styles from './about.module.scss';

import compvismp4 from '../../videos/computer-vision.mp4'
import compviswebm from '../../videos/computer-vision.webm'
import SVMmp4 from '../../videos/SVM_training.mp4'
import SVMwebm from '../../videos/SVM_training.webm'

import eyemp4 from '../../videos/eye.mp4'
import appmp4 from '../../videos/app.mp4'
import printmp4 from '../../videos/print.mp4'
import toolmp4 from '../../videos/tool.mp4'

export default class About extends Component<any,any>{
    
    render() {
        return (
            <div id="about" className={styles.about}>
                <div className={styles.abouttop}>
                    <div className={styles.abouttopleft}>
                        <div>
                        <StaticImage 
                        src="../../images/adam.jpg" 
                        alt = "A picture of me"
                        placeholder="blurred"
                        layout="fullWidth"
                        aspectRatio={1/1}
                        style={{width:"auto", margin:"auto"}}
                        imgStyle={{width:"auto", margin:"auto"}}
                        />
                        </div>
                    </div>
                    <div className={styles.abouttopright}>
                        <h1>About Me</h1>
                        <p>Hi I'm Adam! I'm currently in my 4th year at the University of Southampton pursuing an MEng in Computer Science. In my free time you can find me tinkering with computers or gaming. I'm also an avid football geek and Arsenal FC supporter. </p>
                    </div>
                </div>
                <div className={styles.aboutbottom}>
                    <div className={styles.aboutbottomleft}>
                        <h1>Interests</h1>
                        <ul>
                            <li>
                                <video disableRemotePlayback onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.currentTime=0; e.target.pause()}} loop muted playsInline>
                                    <source src={toolmp4} type="video/mp4"/>
                                </video>
                                Machine learning techniques
                            </li>
                            <li>
                                <video disableRemotePlayback onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.currentTime=0; e.target.pause()}} loop muted playsInline>
                                    <source src={eyemp4} type="video/mp4"/>
                                </video>
                               Computer Vision
                            </li>
                            <li>
                                <video disableRemotePlayback onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.currentTime=0; e.target.pause()}} loop muted playsInline>
                                    <source src={appmp4} type="video/mp4"/>
                                </video>
                                App development
                            </li>
                            <li>
                                <video disableRemotePlayback onMouseOver={e => e.target.play()} onMouseOut={e => {e.target.currentTime=0; e.target.pause()}} loop muted playsInline>
                                    <source src={printmp4} type="video/mp4"/>
                                </video>
                               3D Printing
                            </li>
                        </ul>
                    </div>
                    <div className={styles.aboutbottomright}>
                        <div className={styles.aboutbottomrightleft}>
                            <video disableRemotePlayback autoPlay loop muted playsInline>
                                <source src={SVMwebm} type="video/webm"/>
                                <source src={SVMmp4} type="video/mp4"/>
                            </video>
                        </div>
                        <div className={styles.aboutbottomrightright}>
                            <video disableRemotePlayback autoPlay loop muted playsInline>
                                <source src={compviswebm} type="video/webm"/>
                                <source src={compvismp4} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
