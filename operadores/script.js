function getAdmins(map) {
    let admins = [];
    for ([Key, Value] of map) {
        if (Value === 'Admin') {
            admins.push(Key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Lucas', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));