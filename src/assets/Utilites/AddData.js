const getStoreList =()=>{
 const storedListstr=localStorage.getItem('read-list')
  if (storedListstr) {
    const storeList=JSON.parse(storedListstr)
    return storeList;
  } else {
    return [];
  }
}
const addToStoreList =(id)=>{
 const storeList = getStoreList();
 if (storeList.includes(id)) {
    console.log(id,"already exists");
 }
 else{
    storeList.push(id)
    const storedListstr=JSON.stringify(storeList)
    localStorage.setItem('read-list',storedListstr)
 }
}
export{addToStoreList,getStoreList}