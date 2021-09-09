import React from 'react';

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
)


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


const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course;