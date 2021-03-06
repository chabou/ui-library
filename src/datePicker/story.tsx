import React from 'react'
import moment from 'moment'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import DatePicker from 'datePicker'
import { VERTICAL_SCROLLABLE } from 'react-dates/constants'

const stories = storiesOf('DatePicker', module)
stories.addDecorator(withKnobs)

stories.add(
  'default',
  withInfo('DatePicker with all it’s default props')(() => (
    <DatePicker
      name="datapicker-default"
      initialDate={moment()}
      locale={text('locale', 'en')}
      onChange={action('onChange')}
    />
  )),
)

stories.add(
  'vertically scrollable',
  withInfo('DatePicker vertically scrollable with 12 months')(() => (
    <div style={{ height: 568, width: 475 }}>
      <DatePicker
        name="datapicker-vertically-scrollable"
        initialDate={moment()}
        locale={text('locale', 'en')}
        onChange={action('onChange')}
        orientation={VERTICAL_SCROLLABLE}
        numberOfMonths={12}
      />
    </div>
  )),
)
