// Console.WriteLine("Insira a seguir:");
// Console.WriteLine();

// Console.Write("Seu nome: ");
// string nome;
// nome = Console.ReadLine()!;

// Console.Write("Seu sobrenome: ");
// string sobrenome;
// sobrenome = Console.ReadLine()!;

// Console.WriteLine($"Nome completo: {nome} {sobrenome}");
// Console.WriteLine($"Nome de catálogo: {sobrenome.ToUpper()}, {nome}");

let nome = prompt("Digite seu nome");
let sobrenome = prompt("Digite seu sobrenome");

// let nomeCompleto = nome + " " + sobrenome;
// let nomeCatalogo = sobrenome.toUpperCase() + "," + nome;

alert('Seu nome completo é: ');
alert(nome + " " + sobrenome);

alert('Seu nome de catálogo é: ');
alert(sobrenome.toUpperCase() + ", " + nome);