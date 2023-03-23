import React from 'react'
import { GreettestDriven } from './greetTestDrivenApproach.types';
export default function GreettestDrivenApproach(props: GreettestDriven) {
  return (
    <div>Hello {props.name}</div>
  )
}
