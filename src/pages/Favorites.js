import { useContext } from 'react';

import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';

function Favorites(){
    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if(favoritesCtx.totelFavorites === 0) {
        content = <p>No favorites yet. add some?</p>
    }else {
        content = <MeetupList meetups={favoritesCtx.favorites} />;
    }


    return  <section>
        <h1> My Favorites </h1>
        {content}
        
    </section>;


}

export default Favorites;
