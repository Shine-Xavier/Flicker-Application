
const paginate = (photo) => {
    const itemsPerPage=20;
   const pages=Math.ceil(photo.length/itemsPerPage);
   const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return photo.slice(start, start + itemsPerPage);
  })
  return newFollowers;
}

export default paginate
