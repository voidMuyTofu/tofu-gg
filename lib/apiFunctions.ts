import axios from "axios";

export const getSummonerByName = async (summonerName: string, region: string) => {
    if (summonerName !== "" || region !== "") {
        var config: {} = {
            method: 'get',
            url: 'https://rlgpyy7hje.execute-api.eu-west-3.amazonaws.com/rgapi-2/summoner/euw1/Côkayn',
            headers: {}
        };

        await axios(config)
            .then((response) => {
                resolve(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }

}