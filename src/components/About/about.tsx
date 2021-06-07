import React,{Component} from 'react';
import Panel from '../panel';
import * as styles from './about.module.scss';
import { StaticImage } from "gatsby-plugin-image"


export default class About extends Component<any,any>{

    constructor(props:any){
        super(props)
        this.state ={
          MouseLoc: 0,
        }
      }

    render() {
        return (
            <div>
                <Panel>
                    <div className={styles.topleft}>
                        <StaticImage src='../../images/adam.jpg' alt='A picture of me'/>
                    </div>
                    <div className={styles.topright}>
                        <h1>About Me</h1>
                        <p>Hi I'm Adam! I'm currently in my 4th year at the University of Southampton pursuing an MEng in Computer Science. In my free time you can find me tinkering with computers or gaming. I'm also an avid football geek and Arsenal FC supporter. </p>
                    </div>
                </Panel>
                <Panel>
                    <div className={styles.bottomleft}>
                        <h1>Interests</h1>
                        <ul>
                            <li>Machine learning techniques</li>
                            <li>Computer Vision</li>
                            <li>App development</li>
                            <li>Sustainability and environmental change</li>
                        </ul>
                    </div>
                    <div className={styles.bottomright}>
                        <div className={styles.aboutbottomrightleft}>
                            <StaticImage src='../../images/SVM_training' alt="Training a svm"/>
                        </div>
                        <div className={styles.aboutbottomrightright}>
                            <StaticImage src='../../images/computer-vision' alt="Capturing my face using depth sensors"/>
                        </div>
                    </div>
                
                </Panel>
            </div>
        );
    }
}
