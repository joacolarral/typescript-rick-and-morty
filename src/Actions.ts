import { IAction, IEpisode, IState, Dispatch } from "./interfaces";

export const fetchDataAction = async (dispatch: Dispatch) => {
  const data = await fetch(
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
  );
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: Dispatch | any,
  episode: IEpisode | any
): IAction => {
  const episodeInFav = state.favourites.includes(episode);

  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };

  if (episodeInFav) {
    const favWithoutEpisode = state.favourites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );

    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode,
    };
  }

  return dispatch(dispatchObj);
};
