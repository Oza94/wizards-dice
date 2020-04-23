import React from 'react'
import { Page } from '../../../components/molecules'
import NameGenerator from '../../../components/organisms/NameGenerator/NameGenerator'

const TABLES_OPTIONS = [
  { label: 'Humain (M)', value: 'gen_humanmale_name' },
  { label: 'Humain (F)', value: 'gen_humanfem_name' },
  { label: 'Nain (M)', value: 'gen_dwarfmale_name' },
  { label: 'Elfe (M)', value: 'gen_elfmale_name' },
]

function NPCNamesGeneratorPage() {
  return (
    <Page
      description="Séléctionnez un type de personnage pour générer des noms."
      title="Noms de PNJ"
    >
      <NameGenerator
        options={TABLES_OPTIONS}
        initialValues={{ table: 'gen_humanmale_name', count: 20 }}
      />
    </Page>
  )
}

export default NPCNamesGeneratorPage
