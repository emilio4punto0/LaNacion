const get = async (url)=>{

    const response = await fetch(url);
    const news = await response.json();
    return news; 
}
const dataCleaner = data => {

    const set = new Set( data.map( JSON.stringify ) )
    const cleanData = Array.from( set ).map( JSON.parse );
    return cleanData
}
const mainTitlesDataHandler = (data)=>{

    const newsSubtypeFilter = data.filter( x => x.subtype == 7)
    const tagsGroup = newsSubtypeFilter.map(x => x.taxonomy.tags).flat()
    const sortedTags = tagsGroup.sort((a, b) => {
        return b.slug.split("tid")[1] - a.slug.split("tid")[1];
    })

    return dataCleaner(sortedTags)
}

export  { get, dataCleaner, mainTitlesDataHandler }