import Lazy from '../../components/atoms/Lazy/Lazy'
import { Loader } from '../../components/atoms'

export default Lazy({
  load: () =>
    import(
      /* webpackChunkName: "p.home" */
      './Home'
    ),
  loader: Loader,
})
