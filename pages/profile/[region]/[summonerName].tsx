import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserInfo } from "../../../interfaces/UserInfo";
import { getSummonerByName } from "../../../lib/apiFunctions";

export default function SummonerInfoPage({ data }) {
  const router = useRouter();
  const { summonerName, region } = router.query;
  console.log(data);

  useEffect(() => {
    getSummonerByName(summonerName.toString(), region.toString()).then(
      (data) => {
        setSummonerInfo(data);
      }
    );
  }, []);

  const [summonerInfo, setSummonerInfo] = useState<UserInfo>({
    accountid: "",
    id: "",
    name: "",
    profileIconId: "",
    puuid: "",
    revisionDate: "",
    summonerLevel: "",
  });

  return (
    <>
      {summonerInfo.id && (
        <>
          <h1>Bienvenido {summonerInfo.name}</h1>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/11.19.1/img/profileicon/${summonerInfo.profileIconId}.png`}
            height="100"
            width="100"
          ></img>
          <p>Nivel : {summonerInfo.summonerLevel}</p>
        </>
      )}
    </>
  );
}

//export async function getServerSideProps({ params }) {
//  const data = { title: params.summonerName, hola: params.region };
//  var requestOptions: any = {
//    method: "GET",
//    redirect: "follow",
//  };
//
//  const res = await fetch(
//    "https://rlgpyy7hje.execute-api.eu-west-3.amazonaws.com/rgapi-2/summoner/euw1/Côkayn",
//    requestOptions
//  );
//
//  return { props: { data: JSON.stringify(await res.json()) } };
//}
