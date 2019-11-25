import React from 'react'

import Button from './index'

export default { title: 'Button' }

export const all = () => {
  return (
      <div style={{ padding: '1.5rem' }}>
        <h1>Buttons</h1>
        <div style={{ marginBottom: '2rem' }}>
          <Button small>small</Button>
          <Button>default</Button>
          <Button large>large</Button>
        </div>
      </div>
  )
}
