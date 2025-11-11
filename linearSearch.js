function linearSearch(searchTerm, arr) {
  for(i = 0; i <= arr.length; i++){
    if (arr[i] === searchTerm){
      return i
    }
  }
  return undefined;
}


function globalLinearSearch(searchTerm, arr) {
  let globalArray = []
  for(i = 0; i <= arr.length; i++){
    if (arr[i] === searchTerm){
      globalArray.push(i)
      }
    else{
       continue
    }
  }
  return globalArray;
}

module.exports = { linearSearch, globalLinearSearch };
