import styles from '../styles/Home.module.css'
import { useInput } from '../lib/hooks'
import { getSummonerByName } from '../lib/apiFunctions'
import { useState } from 'react';

export default function Home() {
  const summonerName = useInput("");
  const region = useInput("euw1");
  const [summonerInfo, setSummonerInfo] = useState("");

  const getSummonerInfo = async (summonerName: string, region: string) => {
    const info = await getSummonerByName(summonerName, region).then(() => console.log(info));
    
  }

  return (
    <div>
      <h1>Introduce tu nombre de invocador</h1>
      <div className={styles.formEnter}>
        <input name="summonerName" placeholder="Nombre de invocador" {...summonerName} />
        <select name="regions" id="regions" {...region}>
          <option value="euw1">EUW</option>
          <option value="eun1">EUNE</option>
          <option value="kr">KR</option>
          <option value="na1">NA</option>
          <option value="la1">LA</option>
          <option value="oc1">OCE</option>
          <option value="ru">RU</option>
          <option value="tr1">TUR</option>
        </select>
        <button onClick={() => getSummonerInfo(summonerName.value, region.value)}>Buscar</button>
      </div>
    </div>
  )
}