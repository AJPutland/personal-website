import React from "react"
import * as styles from './layout.module.scss';

export default function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>
}