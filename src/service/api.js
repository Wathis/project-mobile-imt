let baseUrl = "https://devfest-nantes-2018-api.cleverapps.io"

export const getSessions = () => {
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

export const getSpeakers = () => {
    return new Promise(
        (resolve, reject) => {
            fetch(`${baseUrl}/speakers`)
                .then(res => res.json())
                .then(speakers => {
                    resolve(speakers);
                })
        }
    );
}