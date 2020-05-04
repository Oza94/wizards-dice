import React from 'react'
import { Page } from '../../../components/molecules'
import NameGenerator from '../../../components/organisms/NameGenerator/NameGenerator'

const TABLES_OPTIONS = [
  { label: 'Misérable (3pc)', value: 'rt_generic_tavern_miserabledish' },
  { label: 'Pauvre (6pc)', value: 'rt_generic_tavern_poordish' },
  { label: 'Modeste (5pa)', value: 'rt_generic_tavern_modestdish' },
  { label: 'Riche (8pa)', value: 'rt_generic_tavern_richdish' },
  { label: 'Aristocratique (2po)', value: 'rt_generic_tavern_aristodish' },
]

function TavernNameGeneratorPage() {
  return (
    <Page
      description="Séléctionnez un type de menu pour générer des noms."
      title="Menus de tavernes"
    >
      <NameGenerator
        options={TABLES_OPTIONS}
        initialValues={{ table: 'rt_generic_tavern_miserabledish', count: 10 }}
      />
    </Page>
  )
}

export default TavernNameGeneratorPage
