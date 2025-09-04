function insertarEmpleado() {
    let nombreEmpleado = document.getElementById('name').value;
    let salarioEmpleado = document.getElementById('salary').value.toString();
    const regexNombre = /[^áÁéÉíÍóÓúÚüÜñÑa-zA-Z\s-]/i; // valida que no tenga números ni caracteres especiales
    if (regexNombre.test(nombreEmpleado)) {
        alert("Por favor ingrese solo letras, espacios y guiones en el nombre de empleado.");
        return;
    }
    const regexSalario = /^\d*\.?\d*$/i; // valida que sea número
    if (!regexSalario.test(salarioEmpleado) || isNaN(salarioEmpleado) || salarioEmpleado <= 0) {
        alert("Por favor ingrese un salario válido (número positivo).");
        return;
    }
    
}

function volverPagPrincipal() {
    window.location.href = 'index.html';
}