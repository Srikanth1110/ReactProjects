const URL = 'http://localhost:8900';


export function latestNews(){
    const output = fetch(`${URL}/articles?_start=4`,{
        method:'GET'
    }).then(response => response.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function nextnews(){

    const output = fetch(`${URL}/galleries?_start=3`,{
        method:'GET'
    }).then(response => response.json())

    return{
        type:'GET_OLD',
        payload:output
    }
}