const Course = ({ course }) => {
  const Header = ({ course }) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    );
  };

  const Part = ({ part, exercises }) => {
    return (
      <div>
        <p>
          {part} {exercises}
        </p>
      </div>
    );
  };

  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        ))}
      </div>
    );
  };

  const Total = ({ parts }) => {
    const sum = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
      <div>
        <strong>Total of {sum} excercises</strong>
      </div>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
