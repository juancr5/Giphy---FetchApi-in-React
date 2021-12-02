

export const getGifsService = async (category) => {

    //Consumir la api y desestructurar la informacion
    const apikey = "E819tRW8kVAi2v89wjsr2bGw1WiS2nBp&q"
    //Category le pasara el parametro de la busqueda al query de la url
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=10&api_key=${apikey}`
    const resp = await fetch(url);
    const { data } = await resp.json();


    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}