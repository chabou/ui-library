import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Stepper from 'stepper'

const stories = storiesOf('Stepper', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default stepper',
  withInfo('')(() => (
    <Stepper
      name="stepper1"
      min={number('min', Number.MIN_SAFE_INTEGER)}
      max={number('max', Number.MAX_SAFE_INTEGER)}
      step={number('step', 2)}
      value={number('value', 5)}
      increaseLabel={text('increaseLabel', 'Increment')}
      decreaseLabel={text('decreaseLabel', 'Decrement')}
    >
      {text('children', 'Number of seats')}
    </Stepper>
  )),
)

stories.add(
  'Stepper with formatted value',
  withInfo('')(() => (
    <Stepper
      name="stepper2"
      min={number('min', Number.MIN_SAFE_INTEGER)}
      max={number('max', Number.MAX_SAFE_INTEGER)}
      step={number('step', 2)}
      value={number('value', 5)}
      increaseLabel={text('increaseLabel', 'Increment')}
      decreaseLabel={text('decreaseLabel', 'Decrement')}
      format={value => `${value} €`}
    >
      {text('children', 'Edit the price')}
    </Stepper>
  )),
)

/* Tests to build */
