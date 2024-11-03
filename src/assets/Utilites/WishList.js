const getWishList =()=>{
    const WishListstr=localStorage.getItem('wish-list')
     if (WishListstr) {
       const wishList=JSON.parse(WishListstr)
       return wishList;
     } else {
       return [];
     }
   }
   const addToWishList =(id)=>{
    const wishList= getWishList();
    if (wishList.includes(id)) {
       console.log(id,"already exists wish");
    }
    else{
       wishList.push(id)
       const WishListstr=JSON.stringify(wishList)
       localStorage.setItem('wish-list',WishListstr)
    }
   }
  export{addToWishList}