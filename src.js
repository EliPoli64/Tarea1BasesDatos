fetch(`http://25.42.57.218:5000/proyecto/selectTodos`)
    .then(response => response.json())
    .then(data => {
        const tabla = document.getElementById('empleados-tabla');
        tabla.innerHTML = '';
        data.forEach(empleado => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empleado.ID}</td>
                <td>${empleado.Nombre}</td>
                <td>${empleado.Salario}</td>
            `;
            tabla.appendChild(fila);
        }); 
    })

function buscarEmpleado() {
    let filtro = document.getElementById('name').value.toLowerCase();
    const tabla = document.getElementById('empleados-tabla');
    tabla.innerHTML = '';
    /* data.forEach(empleado => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${empleado.ID}</td>
            <td>${empleado.Nombre}</td>
            <td>${empleado.Salario}</td>
        `;
        tabla.appendChild(fila);
    }); // cuando se tenga una lista en la variable empleado */
    
}   

function cargarInsertarEmpleado() {
    window.location.href = 'insertar.html';
}

