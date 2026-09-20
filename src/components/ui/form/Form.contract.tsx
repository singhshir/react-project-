import type { BaseSyntheticEvent, ReactNode } from "react"


export type FormLabelPropsType = Readonly<{
        htmlFor?: string,
        className?: string,
        children: ReactNode
    }>

export type TextInputComponentPropsType = Readonly<{
    htmlFor?: string, 
    label: ReactNode,
    type?: string, 
    name:string, 
    placeholder?: string, 
    labelClass?: string, 
    inputClass?: string
    onChange: (e:BaseSyntheticEvent) => void
}>