import React from 'react'

type GreettestDrivenApproach={
    name?:string
}
export default function GreettestDrivenApproach(props : GreettestDrivenApproach) {
  return (
    <div>Hello {props.name}</div>
  )
}
