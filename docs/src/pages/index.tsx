import { Cross } from '../../../src'
import { Squash } from '../../../src'
import { Twirl } from '../../../src'
import Hamburger from '../../../src'
import React from 'react'
import Card from '../components/card'

export default () => (
  <div className="w-full flex justify-center h-screen items-center">
    <div className="bg-white flex justify-between w-full items-center max-w-screen-sm">
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
  </div>
)
