


export default function useLocalStorage(){

  function getFromStorage(name){
    const foundItem = localStorage.getItem(name)
    if( !foundItem ) return null 
    return JSON.parse(foundItem)
  }

  function saveToStorage(name, data){
    const payload = JSON.stringify(data)
    localStorage.setItem(name, payload)
  }

  return {
    getFromStorage,
    saveToStorage
  }
}