export const getData=async function(cbf,errorF){
   try{ const res=await fetch('https://api.tvmaze.com/shows')
    const movies=await res.json()
    const sortedMovies=movies.sort((a,b)=> b.rating?.average - a.rating?.average).slice(0,50)
    // console.log(movies.sort((a,b)=> b.rating?.average - a.rating?.average).slice(0,50));
    cbf(sortedMovies)
  } catch(err){
    console.log('Loading..');
    errorF(true)
  }
  }