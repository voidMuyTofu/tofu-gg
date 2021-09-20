import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useInput } from '../lib/hooks'

export default function Home() {
  const summonerName = useInput("");
  return (
    <div>
      <h1>Introduce tu nombre de invocador</h1>
      <form className={styles.formEnter}>
        <input name="summonerName" placeholder="Nombre de invocador" {...summonerName} />
        <button>Buscar</button>
      </form>

    </div>
  )
}
