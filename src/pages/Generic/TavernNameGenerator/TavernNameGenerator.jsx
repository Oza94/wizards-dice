import React from 'react'
import { Page } from '../../../components/molecules'
import NameGenerator from '../../../components/organisms/NameGenerator/NameGenerator'

const TABLES_OPTIONS = [{ label: 'Taverne', value: 'generic_tavern_name' }]

function TavernNameGeneratorPage() {
  return (
    <Page
      description="Séléctionnez un type de taverne pour générer des noms."
      title="Noms de tavernes"
    >
      <NameGenerator
        options={TABLES_OPTIONS}
        initialValues={{ table: 'generic_tavern_name', count: 10 }}
      />
    </Page>
  )
}

export default TavernNameGeneratorPage
