import type { BaseSyntheticEvent, ReactNode } from "react"
import type { Control, FieldValues, Path } from "react-hook-form"


export type FormLabelPropsType = Readonly<{
        htmlFor?: string,
        className?: string,
        children: ReactNode
    }>

export type TextInputComponentPropsType<T extends FieldValues> = Readonly<{
    htmlFor?: string, 
    label: ReactNode,
    type?: string, 
    name:Path<T>, 
    placeholder?: string, 
    labelClass?: string, 
    inputClass?: string,
    control: Control<T>,
    errMsg?: string
}>