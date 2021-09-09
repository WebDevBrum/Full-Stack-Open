import React from 'react'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
)

// NEED TO MAP THE RETUTRN OF THESE ALSO

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => {
    return (
      <Part key={part.id} part={part.name} exercise={part.exercises}/>
    )
  })
      }
    </div>
  )
  
}


const Total = ({parts}) => {
  
  return (
    <strong>
      <p>Number of exercises {
        parts.reduce((acc, part) => {
          return acc + part.exercises;
         }, 0 )} 
        </p></strong>
  )
}

// NEED TO MAP THE RETURN OF THESE, POSSIBLE IN APP

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses
        .map((course) => (
          <Course key={course.id} course={course}/>
        ))}
    </div>
  )
}

export default App