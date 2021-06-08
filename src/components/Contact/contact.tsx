import React,{Component} from 'react';
import * as styles from './contact.module.scss';
import Email from '../../images/email.png';
import Phone from '../../images/phone.jpg';
import CV from './../../images/form.png'

export default class Contact extends Component<any,any>{
    render() {
        return (
             <div ref={this.props.refProp} id="contact" className={styles.contact}>
                    <h1>Contact Me</h1>
                    <p>Please feel free to contact me with any business enquiries or questions! I will do my best to get back to you quickly</p>
                    <div className={styles.content}>
                        <div className={styles.left}>                            
                            <img src={Email} alt='Email' />
                            <h3><a href="mailto:ajputland@gmail.com">ajputland@gmail.com</a></h3>
                        </div>
                        <div className={styles.middle}>
                            <img src={Phone} alt='Phone'/>
                            <h3>Phone upon request</h3>
                        </div>
                        <div className={styles.right}>
                            <img src={CV} alt='CV'/>
                            <h3>CV upon request</h3>
                        </div>
                    </div>
                    <p>See the <a href="https://github.com/AJPutland/personal-website">github repository</a> of this website</p>
            </div>
        );
    }
}