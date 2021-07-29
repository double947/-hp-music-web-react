import React from 'react'
import { Redirect } from 'react-router-dom'

import CoDiscover from '@/views/discover'
import CoRecommend from "../views/discover/c-pages/recommend"
import CoRanking from "../views/discover/c-pages/ranking"
import CoSongs from "../views/discover/c-pages/songs"
import CoDjradio from "../views/discover/c-pages/djradio"
import CoArtist from "../views/discover/c-pages/artist"
import CoAlbum from "../views/discover/c-pages/album"

import CoMine from '@/views/mine'
import CoFriend from '@/views/friend'


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: CoDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: CoRecommend
      },
      {
        path: "/discover/ranking",
        component: CoRanking
      },
      {
        path: "/discover/songs",
        component: CoSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: CoDjradio
      },
      {
        path: "/discover/artist",
        component: CoArtist
      },
      {
        path: "/discover/album",
        component:CoAlbum
      },
    ]
  },
  {
    path: "/mine",
    component: CoMine
  },
  {
    path: "/friend",
    component: CoFriend
  },
]

export default routes