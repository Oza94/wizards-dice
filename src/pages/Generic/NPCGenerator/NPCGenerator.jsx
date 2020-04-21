import React, { useCallback, useEffect, useState } from 'react'
import { populateTemplates } from '../../../helpers/template'
import { rolltables, templates } from '../../../data/manifest'
import { formatCreature } from '../../../helpers/format'
import { Page } from '../../../components/molecules'
import { Markdown } from '../../../components/atoms'
import NPCGeneratorForm from '../../../components/form/NPCGenerator/NPCGenerator'
import { FORM_NPCGENERATOR } from '../../../constants/form'
import Reducer from '../../../store/Reducer'
import formReducer from '../../../store/reducers/form'
import useFormValues from '../../../store/hooks/useFormValues'

const RACES_OPTIONS = [
  { label: 'Humain', value: 'tpl_creature_human' },
  { label: 'Nain', value: 'tpl_creature_dwarf' },
]

function NPCGenerator() {
  const [creatureMd, setCreatureMd] = useState(null)
  const values = useFormValues(FORM_NPCGENERATOR)

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
    generateNPC()
  }, [values && values.race])

  return (
    <>
      <Reducer name="form" reducer={formReducer} />
      <Page title="Générateur de PNJ">
        <NPCGeneratorForm
          initialValues={{ race: RACES_OPTIONS[0]?.value }}
          racesOptions={RACES_OPTIONS}
          onSubmit={generateNPC}
        />
        {creatureMd && <Markdown content={creatureMd} />}
      </Page>
    </>
  )
}

NPCGenerator.propTypes = {}

export default NPCGenerator
