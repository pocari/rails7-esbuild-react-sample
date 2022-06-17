import React from 'react'
import ReactDOM from 'react-dom'

const startReactComponentWithAppData = <T>(
  component: React.FC<T>,
  appDataSelector: string
): void => {
  const dom = document.querySelector(appDataSelector)
  const props = JSON.parse(dom.getAttribute('app-data'))
  ReactDOM.render(React.createElement(component, props), dom)
}

export default startReactComponentWithAppData
