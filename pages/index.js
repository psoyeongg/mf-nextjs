import Nav from '../components/nav'
import Bar from '../components/bar'
import styles from '../styles/Home.module.css'
import Button from '../components/button'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav/>
        <Bar menus={[
            {title: 'home', url: '/'},
            {title: 'about', url: '/about'},
        ]}/>
        <Button/>
            <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div>partial snapshot from our NextJS App1</div>
      </main>
    </div>
  )
}
