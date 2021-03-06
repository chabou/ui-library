import React, { PureComponent } from 'react'
import cc from 'classcat'

import style from 'checkbox/style'

export interface CheckboxProps {
  readonly name: string,
  readonly children: string,
  readonly className?: Classcat.Class,
  readonly subLabel?: string,
  readonly value?: string,
  readonly checked?: boolean,
  readonly disabled?: boolean,
  readonly labelDisplay?: labelDisplays,
  readonly onChange?: (obj:onChangeParameters) => void,
}

export enum labelDisplays {
  LEFT = 'left',
  RIGHT = 'right',
  NONE = 'none',
}

export interface CheckboxState {
  readonly isChecked: boolean,
  readonly disabled: boolean,
}

export default class Checkbox extends PureComponent <CheckboxProps, CheckboxState> {
  static defaultProps: Partial<CheckboxProps> = {
    className: '',
    subLabel: '',
    checked: false,
    disabled: false,
    labelDisplay: labelDisplays.RIGHT,
  }
  state:CheckboxState = {
    isChecked: this.props.checked,
    disabled: this.props.disabled,
  }

  componentWillReceiveProps(newProps: CheckboxProps) {
    if (newProps.checked !== this.props.checked) {
      this.setState({ isChecked: newProps.checked })
    }
    if (newProps.disabled !== this.props.disabled) {
      this.setState({ disabled: newProps.disabled })
    }
  }

  onChange = () => {
    this.setState((prevState) => {
      const value = !prevState.isChecked
      const props = { name: this.props.name, value }
      this.props.onChange(props)
      return ({
        isChecked: value,
        disabled: false,
      })
    })
  }

  updateCheckedState = () => this.setState(prevState => ({
    isChecked: !prevState.isChecked,
    disabled: false,
  }))

  render() {
    const { className, name, value, children, subLabel, labelDisplay } = this.props

    return (
      <label className={cc([
        'kirk-checkbox',
        {
          'kirk-checkbox--labelDisplay-left': (
            labelDisplay === labelDisplays.LEFT
          ),
          'kirk-checkbox--labelDisplay-none': (
            labelDisplay === labelDisplays.NONE
          ),
        },
        className,
      ])}
      >
        <div>
          <input
            type="checkbox"
            name={name}
            onChange={this.onChange}
            value={value}
            checked={this.state.isChecked}
            disabled={this.state.disabled}
          />
          <span aria-hidden="true" className={cc({ checked: this.state.isChecked })} />
        </div>
        <div>
          <span className="kirk-label">{children}</span>
          {subLabel && <span className="kirk-subLabel">{subLabel}</span>}
        </div>
        <style jsx>{style}</style>
      </label>
    )
  }
}
