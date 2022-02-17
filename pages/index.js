import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem ipsum dolor sit amet consectetur adipiscing elit laoreet varius ultrices maecenas euismod curabitur odio ullamcorper leo sociosqu congue cursus neque orci sodales primis porttitor cubilia dis gravida a quis dictumst scelerisque etiam nisl tortor fames purus placerat penatibus curae lectus tristique parturient nec nisi per aenean lobortis sem litora</p>
      <p className={styles.text}>lorem ipsum dolor sit amet consectetur adipiscing elit laoreet varius ultrices maecenas euismod curabitur odio ullamcorper leo sociosqu congue cursus neque orci sodales primis porttitor cubilia dis gravida a quis dictumst scelerisque etiam nisl tortor fames purus placerat penatibus curae lectus tristique parturient nec nisi per aenean lobortis sem litora</p>
      <Link href="/ninjas">
        <a className={styles.tbn}>See Ninjas Listing</a>
      </Link>
    </div>
  )
}
