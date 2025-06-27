
import './App.css'
import Card from './components/Card'
import Heading from './components/Heading'
import image from './assets/image.jpeg'
function App() {
 const path = image
 const card = [{
        id: 1,

        imgSrc: image,
        companyName: "Vougue India",
        blogTitle: "Of Course I Like Match, I Used to Eat Chalk",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid ad, quo doloribus placeat, voluptatem nulla facere at accusamus illum sequi in numquam sed doloremque voluptatum! Blanditiis dicta nam hic eos. Labore culpa ea temporibus necessitatibus blanditiis! Quidem quis voluptatem est earum deserunt esse, modi, laborum corporis hic cum, eos non corrupti soluta consectetur fugit facere"

 },
 {
        id: 5,

        imgSrc: image,
        companyName: "Vougue India",
        blogTitle: "Of Course I Like Match, I Used to Eat Chalk",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid ad, quo doloribus placeat, voluptatem nulla facere at accusamus illum sequi in numquam sed doloremque voluptatum! Blanditiis dicta nam hic eos. Labore culpa ea temporibus necessitatibus blanditiis! Quidem quis voluptatem est earum deserunt esse, modi, laborum corporis hic cum, eos non corrupti soluta consectetur fugit facere"

    },
  ]
  let cardObject = [


    {
        id: 1,

        imgSrc: image,
        companyName: "Vougue India",
        blogTitle: "Of Course I Like Match, I Used to Eat Chalk",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid ad, quo doloribus placeat, voluptatem nulla facere at accusamus illum sequi in numquam sed doloremque voluptatum! Blanditiis dicta nam hic eos. Labore culpa ea temporibus necessitatibus blanditiis! Quidem quis voluptatem est earum deserunt esse, modi, laborum corporis hic cum, eos non corrupti soluta consectetur fugit facere"

    },

    {
        id: 2,

        imgSrc: image,
        companyName: "Vougue India",
        blogTitle: "Of Course I Like Match, I Used to Eat Chalk",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid ad, quo doloribus placeat, voluptatem nulla facere at accusamus illum sequi in numquam sed doloremque voluptatum! Blanditiis dicta nam hic eos. Labore culpa ea temporibus necessitatibus blanditiis! Quidem quis voluptatem est earum deserunt esse, modi, laborum corporis hic cum, eos non corrupti soluta consectetur fugit facere"

    },

    {
        id: 3,

        imgSrc: image,
        companyName: "Vougue India",
        blogTitle: "Of Course I Like Match, I Used to Eat Chalk",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid ad, quo doloribus placeat, voluptatem nulla facere at accusamus illum sequi in numquam sed doloremque voluptatum! Blanditiis dicta nam hic eos. Labore culpa ea temporibus necessitatibus blanditiis! Quidem quis voluptatem est earum deserunt esse, modi, laborum corporis hic cum, eos non corrupti soluta consectetur fugit facere"

    },


    {
        id: 4,

        imgSrc: image,
        companyName: "Vougue India",
        blogTitle: "Of Course I Like Match, I Used to Eat Chalk",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid ad, quo doloribus placeat, voluptatem nulla facere at accusamus illum sequi in numquam sed doloremque voluptatum! Blanditiis dicta nam hic eos. Labore culpa ea temporibus necessitatibus blanditiis! Quidem quis voluptatem est earum deserunt esse, modi, laborum corporis hic cum, eos non corrupti soluta consectetur fugit facere"

    },


    {
        id: 5,

        imgSrc: image,
        companyName: "Vougue India",
        blogTitle: "Of Course I Like Match, I Used to Eat Chalk",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid ad, quo doloribus placeat, voluptatem nulla facere at accusamus illum sequi in numquam sed doloremque voluptatum! Blanditiis dicta nam hic eos. Labore culpa ea temporibus necessitatibus blanditiis! Quidem quis voluptatem est earum deserunt esse, modi, laborum corporis hic cum, eos non corrupti soluta consectetur fugit facere"

    },

    {
        id: 6,

        imgSrc: image,
        companyName: "Vougue India",
        blogTitle: "Of Course I Like Match, I Used to Eat Chalk",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid ad, quo doloribus placeat, voluptatem nulla facere at accusamus illum sequi in numquam sed doloremque voluptatum! Blanditiis dicta nam hic eos. Labore culpa ea temporibus necessitatibus blanditiis! Quidem quis voluptatem est earum deserunt esse, modi, laborum corporis hic cum, eos non corrupti soluta consectetur fugit facere"

    },
]

//const [initialItems, setItems] = useState(card);


  
  return (
    <>

    <Heading />
    <div className='main-container'> 
      <Card props={cardObject}/>

      
      
    </div>
    
    
    </>
  )
}

export default App
