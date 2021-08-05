import { Map } from 'immutable'
import * as actionTypes from './constants'

// 引出问题：在开发中，如果数据变更，节点类型不相同的时候会怎样呢？
// React 的做法非常简单粗暴，直接将 原 VDOM 树上该节点以及该节点下所有的后代节点 全部删除，然后替换为新 VDOM 树上同一位置的节点，
// 当然这个节点的后代节点也全都跟着过来了。这样的话非常浪费性能，父组件数据一变化，子组件全部都移除，再换新的。

// 解决方法：Immutable.js。Immutable Data 就是一旦创建，就不能再被更改的数据。
// 对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。
// 同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享


const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMENDS: 
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    default: 
      return state;
  }
}

export default reducer