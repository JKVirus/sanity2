import React from 'react'
import FormField from 'part:@sanity/components/formfields/default'
import DefaultSelect from 'part:@sanity/components/selects/default'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'

const variableSelect = props => {
  const setValue = (item) => {
    const {value} = item
    const {onChange} = props
    onChange(PatchEvent.from(value === 'unset' ? unset() : set(value)))
  }
  const {type} = props
  const {title, description, options} = type
  const unsetItem = {title: '', value: 'unset'}
  const currentValue = options.list.find(({value}) => value === props.value)
  return (<FormField label={title} description={description}>
    <DefaultSelect
      label={title}
      placeholder={'Select value'}
      onChange={setValue}
      items={[unsetItem, ...options.list]}
      value={currentValue}
    />
  </FormField>)
}

export default variableSelect