import React, { useContext, useEffect, Suspense } from "react";
import { Store } from "./Store";
import { fetchDataAction, toggleFavAction } from "./Actions";
const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function Homepage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    !state.episodes.length && fetchDataAction(dispatch);
  });

  return (
    <section className="episode-layout">
      <Suspense fallback={<div>loading...</div>}>
        <EpisodeList
          favourites={state.favourites}
          episodes={state.episodes}
          store={{ state, dispatch }}
          toggleFavAction={toggleFavAction}
        />
      </Suspense>
    </section>
  );
}
