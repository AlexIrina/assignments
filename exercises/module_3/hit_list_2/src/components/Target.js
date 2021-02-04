// import axios from 'axios'

export default function Target({target}) {
   

  // const url = 
  const colors = [
    '#E2BF65',
  '#B6A136',
   '#D685AD',
  '#A33EA1',
   '#A6B91A',
   '#6F35FC',
   '#F95587',
   '#A98FF3',
   '#C22E28',
  '#A8A77A',
  '#EE8130',
  '#6390F0',
   '#F7D02C',
   '#96D9D6',
   '#7AC74C', 
   '#735797',
  '#705746',
  '#B7B7CE'
  ]


  const randomColor =  colors[Math.floor(Math.random() * colors.length)]


  // console.log(data.colors[0].hex);
  // const url = `http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`

  // useEffect(() => { 
  //   console.log('render target');
  //   axios.get(url)
  //     .then(data => {
  //       console.log(data)
  //       setBgColor(data.data.colors)
  //     })
  // },[bgColor])
  
  
  return (
        <div className="target" style={{backgroundColor: randomColor}}>

          <div className="img-container">  
              <img src={target.image} alt="targets img"/>
          </div>
          
          <div className="info">
            <h3 className="name">{target.name}</h3> 
          </div>


      </div>
  )
}
