import React from 'react'

import OpenPoetry from 'react-openpoetry'
import 'react-openpoetry/dist/index.css'

const App = () => {
  return (
    <OpenPoetry 
        name="OpenPoetry" 
        slogan="Write down the poem to memorize easier." 
        heading1="Add the poem you are about to learn/practice." 
        helper="Try to split the poem for each verse."
        nextButton="Next"
        heading2="Practice to write it down."
        hintText="Poem hint"
        hintButton="Show/hide hint"
        showHintOnStart={true}
      />
  )
}

export default App
