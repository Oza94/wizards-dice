import React from 'react'
import { PageContainer } from '../../components/atoms'

function HomePage() {
  return (
    <PageContainer>
      <h1>Wizard&apos;s Dices</h1>
      <p>
        Bienvenue sur la page d&apos;accueil de Wizard&apos;s Dices, une suite
        de générateurs aléatoires pour JDR, en français.
      </p>
      <h2>Changelog</h2>
      <ul>
        <li>23/04/20: Ajout du générateur de noms de tavernes basique </li>
        <li>18/04/20: Ajout du générateur de PNJ basique </li>
        <li>
          16/04/20: Ajout des générateurs <b>Humain (F)</b> et <b>Elfe (M)</b>
          &nbsp; sur le générateur de noms de PNJ.
        </li>
        <li>15/04/20: Ajout du générateur de noms</li>
      </ul>
    </PageContainer>
  )
}

export default HomePage
