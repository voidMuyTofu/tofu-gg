import axios from "axios";

export const getSummonerByName = (_summonerName: string, _region: string) => {

    if (_summonerName !== "" || _region !== "") {
        var config: {} = {
            method: 'get',
            headers: {}
        };
        return axios
            .get(`https://rlgpyy7hje.execute-api.eu-west-3.amazonaws.com/rgapi-2/summoner/${_region}/${_summonerName}`, config)
            .then(({data}) => data)
            .catch((error) => {
                console.log(error);
            });
    }

}