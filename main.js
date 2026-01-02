let students = [];

function getUserInfo() {
  let nrStudents = prompt(`How many students do you want to mention?`);
  nrStudents = Number(nrStudents);

  for (let i = 0; i < nrStudents; i++) {
    const studentName = prompt(`Please enter the name for student ${i + 1}:`);
    let studentAge = prompt(`How old is ${studentName}?`);
    const studentAttendance = confirm(`Is ${studentName} present?`);

    students.push({
      name: studentName,
      age: studentAge,
      attendance: studentAttendance,
    });
  }
  return students;
}
console.log(getUserInfo());

function showAttendancePercentage(attendants) {
  let presence = 0;

  for (let i = 0; i < attendants.length; i++) {
    if (students[i].attendance === true) {
      presence++;
    }
  }
  const percentage = (presence / attendants.length) * 100;
  alert(`The attendance percentage is ${percentage}%!`);
}

showAttendancePercentage(students);

function createTeams(nrOfTeams) {
    
}
