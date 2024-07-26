import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.rectangle2}>
        <Link href="/">
          <div className={styles.schoolLogo}>
            <Image
              className={styles.image}
              src="/logo.png"
              width={57}
              height={67}
              alt="School Logo"
            />
          </div>
          <div className={styles.schoolName}>
            <p>KIWANJA MIXED DAY</p> 
            <p>SECONDARY SCHOOL</p>
          </div>
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            HOME
          </Link>
          <Link href="/about" className={styles.navLink}>
            ABOUT
          </Link>
          <Link href="/projects" className={styles.navLink}>
            PROJECTS
          </Link>
          <Link href="/tenders" className={styles.navLink}>
            TENDERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


