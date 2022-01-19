import * as topojson from 'topojson'
// import * as d3 from 'd3'
const dataUrl = './data/hz-geo.json'

export const width = 1280
export const height = 800
export const rectWidth = 50
export const rectHeight = 20

export async function draw(g) {
  // get Data
  let topoData
  let geoData

  try {
    geoData = await d3.json(dataUrl)

    topoData = topojson.topology({ geo: geoData }, 1e6)
    // console.log('>>>>>>>>>>>>', geoData, topoData)

    // draw boder
    const geoBorder = topojson.merge(topoData, topoData.objects.geo.geometries)

    //  获取不包含最外层轮廓的其余边界路径的 GeoJSON，

    const geoInteriors = topojson.mesh(
      topoData,
      topoData.objects.geo,
      (a, b) => a !== b
    )

    /*******      1、创建和配置路径生成器函数       *******/

    const projection = d3.geoMercator().fitSize([width, height], geoData)

    const path = d3.geoPath().projection(projection)

    // draw

    const areasLayer = g.append('g').attr('class', 'layer__region')

    const ineriorsLayer = g.append('g').attr('class', 'layer__interior')

    const outlineLayer = g.append('g').attr('class', 'layer__outline')

    const maskLayer = g.append('g').attr('class', 'layer__region-mask')

    const centerPointLayer = g.append('g').attr('class', 'layer__points')

    areasLayer
      .selectAll('path')
      .data(geoData.features)
      .enter()
      .append('path')
      .attr('class', 'area')
      .attr('d', path)
      .attr('stroke', 'none')
      .attr('fill', '#e63')
      .each(function (d) {
        const el = d3.select(this)
        // console.log('d>>', el, d, el.attr('class'))
        if (d.properties) {
          if (d.properties.gmode === 'snow') {
            el.attr('fill', '#FFFFF0')
          } else if (d.properties.gmode === 'desert') {
            el.attr('fill', '#DEB887')
          } else if (d.properties.gmode === 'forest') {
            el.attr('fill', '#228B22')
          }
        }
      })

    // 交互层
    maskLayer
      .selectAll('path')
      .data(geoData.features)
      .enter()
      .append('path')
      .attr('class', 'area_overlay')
      .attr('d', path)
      .attr('fill', 'skyblue')
      .attr('opacity', 0.15)
      .text((d) => d.properties.name)
      .on('click', function (d) {
        const el = d3.select(this)
        const [x, y] = projection(d.properties.center)

        let msg = ''
        const gmode =
          d.properties && d.properties.gmode ? d.properties.gmode : ''

        switch (gmode) {
          case 'desert':
            msg = '去荒漠淘金'
            break
          case 'forest':
            msg = '去雨林狩猎'
            break
          case 'city':
            msg = '去城镇建房'
            break
          case 'snow':
            msg = '去雪山挖矿'
            break
          default:
            break
        }

        if (msg) {
          showToast(msg)
        }

        console.log(d, el)
      })
      .on('mouseover', mouseOver)
      .on('mouseout', function (d) {
        d3.selectAll('.region-label').remove()
      })
    //   .on('mouseover', function (d) {
    //     const parentEl = d3
    //       .select(this.parentNode)
    //       .text('HHHH')
    //       .attr('opacity', 1)
    //       .attr('fill', 'red')
    //     console.log('over', d)
    //   })
    //   .on('mouseout', function (d) {
    //     console.log('out', d)
    //   })
    function mouseOver(d) {
      const [x, y] = projection(d.properties.center)
      d3.select(this.parentNode)
        .append('text')
        .attr('x', x - 20)
        .attr('y', y)
        .attr('dy', '0.35em')
        .attr('class', 'region-label')
        .text(d.properties.name)
    }

    // 绘制第二层内部边界线
    ineriorsLayer
      .append('path')
      .datum(geoInteriors)
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', '#333')
      .attr('stroke-dasharray', '2 3')

    // 绘制第三层最外圈轮廓线
    outlineLayer
      .append('path')
      .datum(geoBorder)
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', 'red')

    centerPointLayer
      .style('pointer-events', 'none') // 这一层避免事件监听，免得影响交互层的交互
      .selectAll('.center_group')
      .data(geoData.features)
      .enter()
      .append('g')
      .attr('class', 'center_group')
      .each(function (d) {
        // 内部有this引用，不能用箭头函数
        const el = d3.select(this)
        // d.properties中包含该区域的中心点和名字
        // 通过projection将地理坐标转换成绘图的平面坐标
        const [x, y] = projection(d.properties.center)

        // // 绘制圆点
        // el.append('circle')
        //   .attr('cx', x)
        //   .attr('cy', y)
        //   .attr('r', 2)
        //   .attr('stroke', 'none')
        //   .attr('fill', '#000')

        // // 添加地名文字
        // el.append('text')
        //   .attr('x', x + 5)
        //   .attr('y', y)
        //   .attr('dy', '0.35em')
        //   .text(d.properties.name)
      })

    // end
  } catch (err) {
    console.log(err)
    throw err
  }
}

function showToast(text) {
  const toastEl = document.querySelector('#toast')
  document.querySelector('#selectRegon').innerHTML = text
  toastEl.classList.remove('hide')
}
