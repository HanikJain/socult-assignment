import React, { ReactNode } from 'react'
import type { NextPage } from 'next';

import styles from "./GridLayout.module.css"

interface Props {
    children: ReactNode;
}

const GridLayout = (props: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.gridContainer}>
            {props.children}
        </div>
        
    </div>
  )
}


export default GridLayout;
