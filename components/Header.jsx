import Link from 'next/link';
import styles from './Header.module.css'

export default function Header(){
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}> 
                    Gabriel <br />
                    <b>Vanderlei</b>
                </h1>
                <div className={styles.options}>
                    <Link href="/">
                        <div className={styles.menuOptions}>
                            Home
                        </div>
                    </Link>
                    <Link href="/projects">
                        <div className={styles.menuOptions}>
                            Other Projects
                        </div>
                    </Link>
                    <Link href="/demonstrations">
                        <div className={styles.menuOptions}>
                            Demonstrations
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}