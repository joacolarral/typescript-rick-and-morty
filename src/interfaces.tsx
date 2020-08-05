/**
 *
 * All the interfaces
 *
 */
import React from "react";

export type Dispatch = React.Dispatch<IAction>;

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
  _links: { self: { href: string } };
}

export interface IEpisodeListProps {
  favourites: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
  episodes: Array<IEpisode>;
  toggleFavAction: (
    state: IState,
    dispatch: Dispatch,
    episode: IEpisode
  ) => IAction;
}
