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
    if (attendants[i].attendance === true) {
      presence++;
    }
  }
  const percentage = (presence / attendants.length) * 100;
  alert(`The attendance percentage is ${percentage}%!`);
}

showAttendancePercentage(students);

function createTeams(nrOfTeams) {
  let presentStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].attendance === true) {
      presentStudents.push(students[i]);
    }
  }

  for (let i = presentStudents.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = presentStudents[i];
    presentStudents[i] = presentStudents[j];
    presentStudents[j] = temp;
  }

  let teams = [];

  for (let i = 0; i < nrOfTeams; i++) {
    teams.push([]);
  }

  for (let i = 0; i < presentStudents.length; i++) {
    let teamIndex = i % nrOfTeams;
    teams[teamIndex].push(presentStudents[i]);
  }

  for (let i = 0; i < teams.length; i++) {
    console.log("TEAM " + (i + 1));
    console.log(` `);

    for (let j = 0; j < teams[i].length; j++) {
      console.log(teams[i][j].name);
    }
    console.log(` `);
  }
}

createTeams(3);
