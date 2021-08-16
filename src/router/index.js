import React from 'react'
import { Redirect } from 'react-router-dom'

const CoDiscover = React.lazy(() => import("@/views/discover"))
const CoRecommend = React.lazy(() => import("@/views/discover/c-pages/recommend"))
const CoRanking = React.lazy(() => import("@/views/discover/c-pages/ranking"))
const CoSongs = React.lazy(() => import("@/views/discover/c-pages/songs"))
const CoDjradio = React.lazy(() => import("@/views/discover/c-pages/djradio"))
const CoArtist = React.lazy(() => import("@/views/discover/c-pages/artist"))
const CoAlbum = React.lazy(() => import("@/views/discover/c-pages/album"))
const CoPlayer = React.lazy(() => import("@/views/player"))
const CoMine = React.lazy(() => import("@/views/mine"))
const CoFriend = React.lazy(() => import("@/views/friend"))


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
        component: CoAlbum
      },
      {
        path: "/discover/player",
        component: CoPlayer
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