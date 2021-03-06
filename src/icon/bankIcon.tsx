import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class BankIcon extends PureComponent<Icon> {
  static defaultProps: Icon = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
  }

  render() {
    const { className, iconColor, size, title } = this.props
    return (
      // tslint:disable:max-line-length
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
        fill={iconColor}
      >
        { title && <title>{title}</title> }
        <path
          d="M23.739,8.061l-11-6c-0.149-0.082-0.331-0.081-0.479,0l-11,6C1.1,8.148,1,8.317,1,8.5v3C1,11.776,1.224,12,1.5,12h22
          c0.276,0,0.5-0.224,0.5-0.5v-3C24,8.317,23.9,8.148,23.739,8.061z M23,11H2V8.797l10.5-5.728L23,8.797V11z" />
        <path
          d="M16,20.5v-6c0-0.276-0.224-0.5-0.5-0.5S15,14.224,15,14.5v6c0,0.276,0.224,0.5,0.5,0.5S16,20.776,16,20.5z" />
        <path d="M4,20.5v-6C4,14.224,3.776,14,3.5,14S3,14.224,3,14.5v6C3,20.776,3.224,21,3.5,21S4,20.776,4,20.5z" />
        <path d="M10,20.5v-6c0-0.276-0.224-0.5-0.5-0.5S9,14.224,9,14.5v6C9,20.776,9.224,21,9.5,21S10,20.776,10,20.5z" />
        <path d="M22,20.5v-6c0-0.276-0.224-0.5-0.5-0.5S21,14.224,21,14.5v6c0,0.276,0.224,0.5,0.5,0.5S22,20.776,22,20.5z" />
        <path d="M23.5,23h-22C1.224,23,1,23.224,1,23.5S1.224,24,1.5,24h22c0.276,0,0.5-0.224,0.5-0.5S23.776,23,23.5,23z" />
        <circle cx="12.5" cy="7.5" r="1"/>
      </svg>
    )
  }
}

export default BankIcon
