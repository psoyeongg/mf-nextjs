import styles from '../styles/Home.module.css'

const Bar = (await import('app1/bar')).default;
const add = (await import('app1/add')).default;
const multiplyByTwo = (await import('app1/multiplyByTwo')).default;



export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Bar/>
        <h2>{`Adding 2 and 3 ==> `} {add(2, 3)}</h2>
        <h2>{`Multiplying 5 by 2 ==> `} {multiplyByTwo(2, 3)}</h2>
      </main>
    </div>
  )
}
