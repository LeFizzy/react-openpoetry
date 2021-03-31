# react-openpoetry

> A simple React Component for practicing/learning a poem easier for students and anyone.

[![NPM](https://img.shields.io/npm/v/react-openpoetry.svg)](https://www.npmjs.com/package/react-openpoetry) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-openpoetry
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-openpoetry'
import 'react-openpoetry/dist/index.css'

class Example extends Component {
  render() {
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
}
```

## License

GPL-3.0 © [Milan Zeisler](https://github.com/lefizzy)
