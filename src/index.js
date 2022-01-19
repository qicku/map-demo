import './main.scss'

// import * as d3 from 'd3'

import { width, height } from './draw'

import { draw } from './draw'
startApp().catch((err) => {
  console.log('Fail:', err)
})

async function startApp() {
  const box = d3.select('#root')

  const margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  }

  const svg = box.append('svg').attr('width', width).attr('height', height)

  const g = svg
    .append('g')
    .attr('transform', `translate(${margin.top},${margin.left})`)

  await draw(g)
  bindHideButton()
  bindGithub()
}

function bindHideButton() {
  document.querySelector('#hideButton').addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('#toast').classList.add('hide')
    document.querySelector('selectRegon').innerHTML = ''
  })
}

function bindGithub() {
  document
    .querySelector('.goto-github')
    .addEventListener('click', function (e) {
      e.preventDefault()
      window.open(
        'https://github.com/qicku/map-demo/tree/dev-main',
        'game-demo-code'
      )
    })
}
