const nodeFetch = require('node-fetch');


nodeFetch('https://api.spacexdata.com/v3/history')
    .then(res => res.json())
    .then(data => {
        for (let item of data) {
            if (item.links.wikipedia) {
                console.log(item.link.wikipedia);
            }
        }
    }).catch(err => console.log(err));

async function getData() {
    try {
        const res = await nodeFetch();
        const data = await res.json();
        const links = data.map(obj => obj.links.wikipedia).filter(link => link);
        return links;
    } catch (err) {
        console.error(err);
    }
}