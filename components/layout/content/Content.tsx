
import { ReactNode } from 'react'
import classes from './Content.module.css'


interface ContentProps {
    children: ReactNode;
}


export default function Content({ children }: ContentProps){
    return <main className={classes.main}>{children}</main>
}