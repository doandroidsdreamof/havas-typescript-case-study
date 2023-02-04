import React from 'react'

//? types && interfaces //
import { PageTitleProps } from '../../types/interfaces'


const PageTitle = (props: PageTitleProps) => {
  return (
    <h1 className="font-roboto text-5xl font-bold mx-auto text-gray-600 dark:text-white ">{props.title}</h1>
  )
}

export default PageTitle