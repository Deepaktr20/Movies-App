import "./FavouriteList.css";

function FavouriteList({favourites,RemoveFromFavourite,handleRemoveClick}){
    const FavouriteComponent=RemoveFromFavourite;
    return(
        <div className="favouritelist">
            {favourites.map((favourite)=>{
                return(
                    <div>
                    <img src={favourite.Poster} alt="" key={favourite.imdbID} style={{height:200,marginRight:10}}></img>
                    <div onClick={()=>handleRemoveClick(favourite)}><FavouriteComponent/></div>
                    </div>
                )
            })}
        </div>
    )
}
export default FavouriteList;