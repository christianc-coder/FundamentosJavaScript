const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 , specialized: 'JavaScript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 , specialized: 'Java'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialized: 'Python'}    ]
    //... Se pueden agregar más registros de empleados aquí
function mostrarEmpleados() {
  const empleadosTotales = employees
      .map(employee => `<p>${employee.id}: ${employee.name}: - ${employee.departament} - ${employee.salary}</p>`)
      .join('');
  document.getElementById('employeesDetails').innerHTML = empleadosTotales;
} // +
// Metodo Reduce
function calculateTotalSalaries() {
  const salariosTotales = employees.reduce((acc, employee) => acc + employee.salary,0);
  alert(`Salarios Totales: $${salariosTotales}`); // +
}
// Metodo Filter
function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
  if (hrEmployeesDisplay){
  document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
} else {
  alert("No empleado encontrado")
}
} // +
// Metodo Find
function findEmployeeById(employeeId) {
  const EmpleadoEncontrado = employees.find(employee => employee.id === 2);

  if (EmpleadoEncontrado) {
      document.getElementById('employeesDetails').innerHTML = `<p>${EmpleadoEncontrado.id}: ${EmpleadoEncontrado.name} - ${EmpleadoEncontrado.department} - $${EmpleadoEncontrado.salary}</p>`;
  }
  else {
      document.getElementById('employeesDetails').innerHTML = `<p>Empleado con ID no encontrado.</p>`;
  } // +
}
// Metodo Find
function EspecializacionDelEmpleado(especializacion) {
  const empleadosConLaEspecializacion = employees.find(employee => employee.specialized === 'JavaScript');
  if (empleadosConLaEspecializacion) {
      document.getElementById('employeesDetails').innerHTML = `<p>${empleadosConLaEspecializacion.id}: ${empleadosConLaEspecializacion.name} - ${empleadosConLaEspecializacion.department} - $${empleadosConLaEspecializacion.salary} - ${empleadosConLaEspecializacion.specialized}</p>`;
  }
  else {
      document.getElementById('employeesDetails').innerHTML = `<p>Empleado con especializacion no encontrado.</p>`;
  }
  // +
}

