import styles from '../styles/Home.module.css'
import { useInput } from '../lib/hooks'
import { getSummonerByName } from '../lib/apiFunctions'
import { UserInfo } from '../interfaces/UserInfo';
import { useEffect, useState } from 'react';

export default function Home() {
  const summonerName = useInput("");
  const region = useInput("euw1");
  const [summonerInfo, setSummonerInfo] = useState<UserInfo>({ accountid: "", id: "", name: "", profileIconId: "", puuid: "", revisionDate: "", summonerLevel: "" });

  const getSummonerInfo = () => {
    getSummonerByName(summonerName.value, region.value).then((data) => {
      setSummonerInfo(data);
      console.log(data);
    });
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
        <button onClick={getSummonerInfo}>Buscar</button>
        {summonerInfo.id &&
          <>
            <h1>Bienvenido {summonerInfo.name}</h1>
        
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.19.1/img/profileicon/${summonerInfo.profileIconId}.png`} height="100" width="100"></img>
            <p>Nivel : {summonerInfo.summonerLevel}</p>
          </>
        }
      </div>
    </div>
  )
}