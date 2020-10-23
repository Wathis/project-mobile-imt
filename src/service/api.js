
let baseUrl = "https://devfest-nantes-2018-api.cleverapps.io"

const getSessions = () => {
    return new Promise(
        (resolve, reject) => {
            fetch(`${baseUrl}/sessions`)
                .then(res => res.json())
                .then(sessions => {
                    resolve(sessions);
                })
        }
    );
}