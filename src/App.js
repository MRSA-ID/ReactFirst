import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import List from './List';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

// 2. Component
// function Greeting(){
//   return <h1>Halo Nama</h1>
// }

// function Age(props){
//   return <span> Umurnya {props.age}</span>
// }

// component - properties
// function Greeting(props){
//   return <h1>Halo {props.name} <Age age={props.age}/></h1>
// }

// function Greeting(props){
//   return <h1>Halo {props.name} - Umurnya {props.age}</h1>
// }

// 3.STATE

// class
// class Timer extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       time : props.start
//     }
//   }
//   // lifecycle
//   componentDidMount(){
//     this.addInterval = setInterval( () => this.increase(), 1000)
//   }

//   componentWillUnmount(){
//     clearInterval(this.addInterval)
//   }

//   increase(){
//     //update state time setiap detik
//     this.setState((state, props) => ({
//       time: parseInt(state.time) + 1
//     }))
//   }

//   render() {
//     return (
//        <div>{this.state.time} Detik</div>
//       )
//   }
// }

// 4. handle Event biasa
// function Clicker() {
//   function handleClick(e){
//     alert('berhasil mengklik')
//     e.preventDefault()
//   }
//   return (
//       <a href="#" onClick={handleClick}> Klik Bro Sista !!</a>
//     )
// }

// handle Event menggunakan class
// class Toggle extends Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       toggleStatus: true
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(){
//     this.setState(state => ({
//       toggleStatus: !state.toggleStatus
//     }))
//   }

//   render(){
//     return ( 
//         <button onClick = {this.handleClick} >
//           {this.state.toggleStatus ? 'ON' : 'OFF'}
//           <p>Kondisi Sekarang {this.state.toggleStatus ? 'menyala' : 'mati'}</p>
//         </button>
//       )
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Greeting name = 'ramadhan' age='25' />
//         <Greeting name = 'Salmanan' age='20' />
//         <Timer start = '0' />
//         <Timer start = '10' />
//         <Toggle />
//       </header>
//     </div>
//   );
// }

// 5. TODOLIST
// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       todoItem: '',
//       items: []
//     }
//   }

//   handleSubmit = (event) =>{
//     event.preventDefault()
//     this.setState({
//       items    : [...this.state.items, this.state.todoItem],
//       todoItem : ''
//     })
//   }

//   handleChange = (event) =>{
//     this.setState({
//       todoItem: event.target.value
//     })
//   }


//   render() {
//     return (
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <input value={this.state.todoItem} onChange={this.handleChange} />
//             <button>Add</button>
//           </form>
//           <List items={this.state.items} />
//         </div>
//       );
//   }
// }

// 6.API
// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       items: [],
//       isLoading: true
//     }
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => this.setState({ items: data, isLoading: false }))
//   }

//   render() {
//       const {items, isLoading} = this.state

//       if(isLoading){
//         return <p>Loading................</p>
//       }
//     return (
//         <div>
//           <ul>
//               { items.map((item, index) => 
//                 <li key={index}> {item.name} </li> )}
//           </ul>
//         </div>
//       );
//   }
// }

function Home(){
  return <h2> Halaman Home </h2>
}

function ListView(){
  return (
    // react fragment :
    // <React.Fragment> / <></>
      <>
        <h2> Semua User </h2>
        <ul>
          <Link to="user/hilman">Hilman</Link> <br />
          <Link to="user/rama">Rama</Link>
        </ul>
      </>
    )
}

function DataView({ match }){
  return <h2> Ini Halaman {match.params.name} </h2>
}

function noMatch(){
  return <h2> 404, Halaman tidak ditemukan </h2>
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
             <nav>
               <li> <Link to='/'> Home </Link> </li>
               <li> <Link to='/users'> User </Link> </li>
             </nav>

             <main>
                <Switch>
                   <Route path='/' exact component={Home} />
                   <Route path='/users' exact component={ListView} />
                   <Route path='/user/:name' exact component={DataView} />
                   <Route component={noMatch} />
                </Switch>
             </main>

          </div>
        </BrowserRouter>
      );
  }
}

export default App;
