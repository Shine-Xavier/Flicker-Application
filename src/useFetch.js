import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=93d38b80d4e01a18a2149f7ecf974821&format=json&nojsoncallback=1&page=${page}&per_page=60'
;
export const useFetch = () => {
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
try
{
  const response = await fetch(url);
  const data = await response.json();
  ;
  setData(paginate(data.photos.photo));
  setLoading(false)
}
catch(error)
{
console.log(error);
setLoading(true);
}    
  }
  useEffect(() => {
getProducts();
  }, [])
  return { loading, data }
}
