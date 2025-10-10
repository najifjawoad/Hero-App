export const loadWishlist = () =>{
    try{
        const data = localStorage.getItem('wishlist')
        return data? JSON.parse(data) : []
    }catch(err){
        console.log(err)
        return []
    }
}
export const updateList = (app) =>{
    
    const wishlist = loadWishlist()
    try{
        const isDuplicate = wishlist.some(a=>a.id === app.id)
        if(isDuplicate) return alert('Already added in wishlist')
            const updatedWishlist = [...wishlist,app]
        localStorage.setItem('wishlist',JSON.stringify(updatedWishlist))
    }catch(err){
        console.log(err)
    }


}


export const removeFromWishlist = id =>{
    const wishlist = loadWishlist()

    try{
        const updatedWishlist = wishlist.filter(a=>a.id !== id)
        localStorage.setItem('wishlist',JSON.stringify(updatedWishlist))
    }catch(err){
        console.log(err)
    }
}