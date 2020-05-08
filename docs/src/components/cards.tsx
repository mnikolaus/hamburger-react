import { Cross } from '../../../src'
import { Squash } from '../../../src'
import { Twirl } from '../../../src'
import Hamburger from '../../../src'
import Card from './card'
import React from 'react'

export default () => (
  <div className="w-full flex justify-between h-screen items-center">
    <Card>
      <Hamburger size={36} />
    </Card>

    <Card>
      <Squash size={36} />
    </Card>

    <Card>
      <Cross size={36} />
    </Card>

    <Card>
      <Twirl size={36} />
    </Card>
  </div>
)
