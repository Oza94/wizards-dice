import Lazy from '../../../components/atoms/Lazy/Lazy'
import { Loader } from '../../../components/atoms'

export default Lazy({
  load: () =>
    import(
      /* webpackChunkName: "p.tavernnames" */
      './TavernNameGenerator'
    ),
  loader: Loader,
})
