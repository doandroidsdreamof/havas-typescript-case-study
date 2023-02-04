import React from 'react'

//? flowbite //
import { Button } from 'flowbite-react'

//? icons //
import { AiOutlinePlus } from 'react-icons/ai'

const ImportButton = () => {
  return (
    <div>
    <Button>
      Import Posts
      <AiOutlinePlus className="ml-2 h-5 w-5" />
    </Button>
  </div>

  )
}

export default ImportButton