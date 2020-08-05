import React, { useContext, Suspense, lazy } from "react";
import { toggleFavAction } from "./Actions";
import { Store } from "./Store";

const EpisodeList = lazy<any>(() => import("./EpisodeList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="episode-layout">
        <EpisodeList
          favourites={state.favourites}
          episodes={state.favourites}
          store={{ state, dispatch }}
          toggleFavAction={toggleFavAction}
        />
      </div>
      ;
    </Suspense>
  );
}
