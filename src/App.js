import React from 'react'



// //1.5 Answer
// const Header = (props) => {
//   return (
//     <h1>{props.course.name}</h1>
//   );
// }

// const Content = (props) => {
//   return (
//     <div>
//     <Part part={props.parts[0]}/>
    
//     <Part part={props.parts[1]}/>
//     <Part part={props.parts[2]}/>
   
//     </div>
//   );
// }
// const Part = (props) => {
//   return (
//     <p>{props.part.name} {props.part.exercises}</p> 
//   )
// }




// const Total = (props) => {
//   return (
//     <div>
//     <p>Numer of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     </div>
//   )
// }
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course}/>
//       <Content parts={course.parts} />
//        <Total parts={course.parts} />
//     </div>
//   )
// }


// 1.4 ANSWER :)
// const Header = (props) => {
//   return (
//     <h1>{props.course}</h1>
//   );
// }

// const Part = (props) => {
//   return (
//     <p>{props.name} {props.exercises}</p> 
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//     <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
    
//     <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
//     <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
   
//     </div>
//   );
// }

// const Total = (props) => {
//   return (
//     <div>
//     <p>Numer of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     </div>
//   )
// }
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course}/>
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

// / 1.3 ANSWER


// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }



//   return (
//     <div>
//       <p>{course}</p>
//       <p>{part1.name} {part1.exercises}</p>
//       <p>{part2.name} {part2.exercises}</p>
//       <p>{part3.name} {part3.exercises}</p>
//     </div>
//   )
// }


// const Header = (props) => {
//   return (
//     <h1>{props.course}</h1>
//   );
// }

// const Part = (props) => {
//   return (
//     <p>{props.part} {props.exercise}</p> 
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//     <Part part={props.part1} exercise = {props.exercises1}/>
    
//     <Part part={props.part2} exercise = {props.exercises2}/>
//     <Part part={props.part3} exercise = {props.exercises3}/>
   
//     </div>
//   );
// }

// const Total = (props) => {
//   return (
//     <div>
//     <p>Numer of exercise: {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     </div>
//   )
// }

// const App = () => {
  
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14


//   return (
//    <div>
//     <Header 
//       course={course}
//     />
    
//     <Content 
//       part1={part1} exercises1={exercises1}
//       part2={part2} exercises2={exercises2}
//       part3={part3} exercises3= {exercises3}
//     />
//     <Total 
//       exercises1={exercises1} 
//       exercises2={exercises2} 
//       exercises3={exercises3}
//     />
//    </div>
//   )
// }

export default App

