import '../css/helpers.css';

export const Saludar = (name) => {
    console.log('Hola ' + name);
    const h1 = document.createElement('h1');
    h1.innerText = `Hola , ${name}`;

    document.body.append(h1);
};
