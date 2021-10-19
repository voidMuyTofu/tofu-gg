import SearchSummonerForm from "../components/searchSummonerForm";

export default function Home() {
  // const getSummonerInfo = () => {
  //   if (summonerName.value === "") {
  //     console.error("Introduce un nombre");
  //   } else {
  //     getSummonerByName(summonerName.value, region.value).then((data) => {
  //       setSummonerInfo(data);

  //       getSummonerMatchs(data);
  //     });
  //   }
  // };

  // const getSummonerMatchs = (data: any) => {
  //   let globalRegion = "";
  //   if (
  //     region.value == "euw1" ||
  //     region.value == "eun1" ||
  //     region.value == "tr1" ||
  //     region.value == "ru"
  //   ) {
  //     globalRegion = "europe";
  //   } else if (
  //     region.value == "na1" ||
  //     region.value == "br1" ||
  //     region.value == "la1" ||
  //     region.value == "oc1"
  //   ) {
  //     globalRegion = "americas";
  //   } else if (region.value == "jp1" || region.value == "kr") {
  //     globalRegion = "asia";
  //   }

  //  getMatchHistoryById(data.puuid, globalRegion).then((data) => {
  //    data.map((matchId) => {
  //      getMatchById(matchId, globalRegion).then((data) => {
  //        setMatchInfo((e) => [...e, data]);
  //      });
  //    });
  //  });
  //};

  //  const sortMatchesByTime = () => {
  //    matchInfo.sort(
  //      (a, b) => a.info.gameStartTimestamp - b.info.gameStartTimestamp
  //    );
  //  };

  return <SearchSummonerForm />;
}
