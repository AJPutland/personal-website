import React from "react";
import * as styles from './panel.module.scss';

export default function Panel({children}) {
    return (
        <div className={styles.panel}>
            {children}
        </div>
    )
}
//<div className={props.lean==="left" ? styles.dominant : styles.recessive}>
//</div>
//<div className={props.lean==="right" ? styles.dominant : styles.recessive}>
//</div>