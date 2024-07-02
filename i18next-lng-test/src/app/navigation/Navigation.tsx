import Link from 'next/link';
import classes from './Navaigation.module.css'

export default function Navigation(){
    return(
        <div className="{classes.navbar}">
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
      </div>
    );
}