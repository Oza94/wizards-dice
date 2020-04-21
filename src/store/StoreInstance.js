export default class StoreInstance {
  constructor() {
    this.state = {}

    this.reducers = {}

    this.keys = []

    this.onDispatch = null

    this.dispatch = this.dispatch.bind(this)
  }

  addReducer(name, reducer) {
    if (this.reducers[name]) {
      throw new Error(`Reducer "${name}" already exists`)
    }

    this.reducers[name] = reducer
    this.keys = Object.keys(this.reducers)
  }

  hasReducer(name) {
    return !!this.reducers[name]
  }

  removeReducer(name) {
    if (!this.reducers[name]) {
      return
    }

    delete this.reducers[name]
    this.keys = Object.keys(this.reducers)
  }

  dispatch(action) {
    const state = {}
    for (let i = 0; i < this.keys.length; i++) {
      const key = this.keys[i]
      state[key] = this.reducers[key](this.state[key], action)
    }

    if (__DEV_LOGSTORE) {
      console.groupCollapsed(`ACTION "${action.type}"`)
      console.log('Action:', action)
      console.log('PrevState:', this.state)
      console.log('NewState:', state)
      console.groupEnd(`ACTION "${action.type}"`)
    }

    this.state = state

    this.onDispatch && this.onDispatch(state)
    //this.state = this.reducer(this.state, action)
  }
}
