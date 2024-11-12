// Array to store employee data
let employees = [];

const video = document.createElement("video")
video.src = ""


// Function to add a new employee
function addEmployee() {
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const salary = document.getElementById("salary").value;

    if (name && position && salary) {
        const employee = {
            id: Date.now(),
            name,
            position,
            salary
        };
        
        employees.push(employee);
        renderEmployeeTable();
        clearForm();
    }
}

// Function to render the employee table
function renderEmployeeTable() {
    const tableBody = document.getElementById("employee-table-body");
    tableBody.innerHTML = ""; // Clear the table

    employees.forEach((employee) => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>$${employee.salary}</td>
            <td>
                <button class="edit" onclick="editEmployee(${employee.id})">Edit</button>
                <button class="delete" onclick="deleteEmployee(${employee.id})">Delete</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to clear the form inputs
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    document.getElementById("salary").value = "";
}

// Function to delete an employee
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    renderEmployeeTable();
}

// Function to edit an employee
function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);

    document.getElementById("name").value = employee.name;
    document.getElementById("position").value = employee.position;
    document.getElementById("salary").value = employee.salary;

    // Remove the existing employee and allow re-submission as update
    deleteEmployee(id);
}