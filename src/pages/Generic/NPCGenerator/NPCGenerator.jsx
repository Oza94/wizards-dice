import React, { useCallback, useEffect, useState } from 'react'
import { populateTemplates } from '../../../helpers/template'
import { formatCreature } from '../../../helpers/format'
import { Page } from '../../../components/molecules'
import { Markdown } from '../../../components/atoms'
import NPCGeneratorForm from '../../../components/form/NPCGenerator/NPCGenerator'
import { FORM_NPCGENERATOR } from '../../../constants/form'
import Reducer from '../../../store/Reducer'
import formReducer from '../../../store/reducers/form'
import useFormValues from '../../../store/hooks/useFormValues'
import DataLoader from '../../../components/atoms/DataLoader/DataLoader'
import useSelector from '../../../store/hooks/useSelector'
import {
  rolltablesSelector,
  templatesSelector,
} from '../../../store/selectors/data'
import Loader from '../../../components/atoms/Loader/Loader'

const RACES_OPTIONS = [
  { label: 'Humain', value: 'tpl_creature_human' },
  { label: 'Nain', value: 'tpl_creature_dwarf' },
]

const MODULES = RACES_OPTIONS.map((option) => option.value).concat([
  'tpl_creature_humanoid',
])
function NPCGenerator() {
  const [creatureMd, setCreatureMd] = useState(null)
  const values = useFormValues(FORM_NPCGENERATOR)
  const rolltables = useSelector(rolltablesSelector)
  const templates = useSelector(templatesSelector)

  const generateNPC = useCallback(() => {
    const data = populateTemplates(
      ['tpl_creature_humanoid', values ? values.race : 'tpl_creature_human'],
      {
        rolltables,
        templates,
      }
    )

    setCreatureMd(formatCreature(data))
  }, [values])

  useEffect(() => {
    if (values) {
      generateNPC()
    }
  }, [values && values.race])

  return (
    <DataLoader modulesIds={MODULES} loader={Loader}>
      <Reducer name="form" reducer={formReducer} />
      <Page title="Générateur de PNJ">
        <NPCGeneratorForm
          initialValues={{ race: RACES_OPTIONS[0]?.value }}
          racesOptions={RACES_OPTIONS}
          onSubmit={generateNPC}
        />
        {creatureMd && <Markdown content={creatureMd} />}
      </Page>
    </DataLoader>
  )
}

export default NPCGenerator
