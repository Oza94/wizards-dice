import React, { PureComponent } from 'react'

function Lazy({ load, loader: Loader }) {
  class LazyComponent extends PureComponent {
    constructor(props) {
      super(props)

      this.state = { component: LazyComponent.cache }
    }

    componentDidMount() {
      this.load()
    }

    async load() {
      const { default: LazyLoaded } = await load()
      this.setState({ component: LazyLoaded })
      LazyComponent.cache = LazyLoaded
    }
    render() {
      const { component: Render } = this.state
      if (!Render) {
        return <Loader />
      }
      return <Render {...this.props} />
    }
  }

  return LazyComponent
}

Lazy.propTypes = {}

export default Lazy
