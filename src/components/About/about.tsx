import React,{Component} from 'react';
import Panel from '../panel';
import * as styles from './about.module.scss';
import adam from '../../images/adam.jpg';
import svmtrain from '../../images/SVM_training.gif';
import computervis from '../../images/computer-vision.gif'
import tool from '../../images/tool.gif'
import eye from '../../images/eye.gif'
import print from '../../images/print.gif'
import app from '../../images//app.gif'
import toolpic from '../../images/tool_first.gif'
import eyepic from '../../images/eye_first.gif'
import printpic from '../../images/print_first.gif'
import apppic from '../../images/app_first.gif'

export default class About extends Component<any,any>{

    constructor(props:any){
        super(props)
        this.state ={
          MouseLoc: 0,
        }
      }

    render() {
        return (
            <div id="about" className={styles.about}>
                <div className={styles.abouttop}>
                    <div className={styles.abouttopleft}>
                        <img src={adam} alt={"me"}/>
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
                                <div onMouseOut={() => this.setState({MouseLoc: 0})} onMouseOver={() => this.setState({MouseLoc:1})}>
                                    <img src={this.state.MouseLoc===1 ? tool : toolpic} alt="A tool"/>
                                    Machine learning techniques
                                </div>
                            </li>
                            <li>
                                <div onMouseOut={() => this.setState({MouseLoc: 0})} onMouseOver={() => this.setState({MouseLoc:2})}>
                                    <img src={this.state.MouseLoc===2 ? eye : eyepic} alt="An eye"/>
                                    Computer Vision
                                </div>
                            </li>
                            <li>
                                <div onMouseOut={() => this.setState({MouseLoc: 0})} onMouseOver={() => this.setState({MouseLoc:3})}>
                                    <img src={this.state.MouseLoc===3 ? app : apppic} alt="An app" />
                                    App development
                                </div>
                            </li>
                            <li>
                                <div onMouseOut={() => this.setState({MouseLoc: 0})} onMouseOver={() => this.setState({MouseLoc:4})}>
                                    <img src={this.state.MouseLoc===4 ? print : printpic} alt="The globe"/>
                                    3D Printing
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.aboutbottomright}>
                        <div className={styles.aboutbottomrightleft}>
                            <img src={svmtrain} alt="Training a svm"/>
                        </div>
                        <div className={styles.aboutbottomrightright}>
                            <img src={computervis} alt="Capturing my face using depth sensors"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}