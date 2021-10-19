import axios from "axios";

export const getSummonerByName = (_summonerName: string, _region: string) => {
  if (_summonerName !== "" || _region !== "") {
    var config: {} = {
      method: "get",
      headers: {},
    };
    return axios
      .get(
        `https://rlgpyy7hje.execute-api.eu-west-3.amazonaws.com/rgapi-2/summoner/${_region}/${_summonerName}`,
        config
      )
      .then(({ data }) => data)
      .catch((error) => {
        console.log(error);
      });
  }
};

export const getMatchHistoryById = (_puuid: string, _region: string) => {
  if (_puuid !== "") {
    var config: {} = {
      method: "get",
      headers: {},
    };
    return axios
      .get(
        `https://rlgpyy7hje.execute-api.eu-west-3.amazonaws.com/rgapi-2/history/${_region}/${_puuid}`,
        config
      )
      .then(({ data }) => data)
      .catch((error) => {
        console.log(error);
      });
  }
};

export const getMatchById = (_matchId: string, _region: string) => {
  if (_matchId !== "" || _region !== "") {
    var config: {} = {
      method: "get",
      headers: {},
    };
    return axios
      .get(
        `https://rlgpyy7hje.execute-api.eu-west-3.amazonaws.com/rgapi-2/match/${_region}/${_matchId}`,
        config
      )
      .then(({ data }) => data)
      .catch((error) => {
        console.log(error);
      });
  }
};

export const getRankById = (_puuid: string, _region: string) => {
  if (_puuid !== "") {
    var config: {} = {
      method: "get",
      headers: {},
    };
    return axios
      .get(
        `https://rlgpyy7hje.execute-api.eu-west-3.amazonaws.com/rgapi-2/division/${_region}/${_puuid}`,
        config
      )
      .then(({ data }) => data)
      .catch((error) => {
        console.log(error);
      });
  }
};
