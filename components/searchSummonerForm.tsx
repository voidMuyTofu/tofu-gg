import router from "next/router";
import { useInput } from "../lib/hooks";
import styles from "../styles/Home.module.css";

export default function SearchSummonerForm() {
  const summonerName = useInput("");
  const region = useInput("euw1");
  const onClickBuscar = () => {
    if (summonerName.value === "") {
      console.error("Introduce un nombre");
    } else {
      router.push({
        pathname: `/profile/${region.value}/${summonerName.value}`,
      });
    }
  };
  return (
    <div>
      <h1>Introduce tu nombre de invocador</h1>
      <div className={styles.formEnter}>
        <input
          name="summonerName"
          placeholder="Nombre de invocador"
          {...summonerName}
        />
        <select name="regions" id="regions" {...region}>
          <option value="euw1">EUW</option>
          <option value="eun1">EUNE</option>
          <option value="kr">KR</option>
          <option value="na1">NA</option>
          <option value="la1">LAN</option>
          <option value="la2">LAS</option>
          <option value="oc1">OCE</option>
          <option value="ru">RU</option>
          <option value="tr1">TUR</option>
          <option value="br1">BR</option>
          <option value="jp1">JP</option>
        </select>
        <button onClick={onClickBuscar}>Buscar</button>
      </div>
    </div>
  );
}
