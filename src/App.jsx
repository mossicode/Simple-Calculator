// import User from './User'
// import './user.css'
// function App() {
//   let users =[
//     {name:"mostafa", lastname:"Ansari", age:"20"  },
//     {name:"Mortaza", lastname:"Ansari", age:"43"  },
//     {name:"Mobina", lastname:"Akbari", age:"20"  },

//   ]
//   return (
//     <>
//     <h1>hello java Script</h1>
//       <div className='user'>
//           {/* <User name="mostafa" lastname="ansari" age="20" />
//           <User name="mortaza" lastname="ansari" age="43" />
//           <User name="Moina" lastname="Akbari" age="19" /> */}
//           <User {...users[0]} />
//           <User {...users[1]} />
//           <User {...users[2]} />
//       </div>
//     </>
//   )
// }
// // export default App

// import Header from './components/header/Header'
// import About from './components/about/about'
// import Service from './components/service/Service'
// import Blog from './components/blog/Blog'
// import Footer from './components/footer/Footer'
// import State from './components/useState/State'

import Calculate from './calculation/Calculate'

export default function App() {
  return (
    <div>
      <div>
        <Calculate />
      </div>
       {/* <div>
        <Profile />
       </div> */}
     
    </div>
  )
}
