//zad1

class Prostokat {
    constructor(wysokosc, szerokosc, nazwa) {
      this.wysokosc = wysokosc;
      this.szerokosc = szerokosc;
      this.nazwa = nazwa;
    }
  
    obliczObwod() {
      return 2 * (this.wysokosc + this.szerokosc);
    }
  
    obliczPole() {
      return this.wysokosc * this.szerokosc;
    }
  
    porownaj(prostokat) {
      if (this.obliczPole() > prostokat.obliczPole()) {
        return this;
      } else {
        return prostokat;
      }
    }
  }
  
  
  const prostokat1 = new Prostokat(5, 10, "Prostokąt 1");
  const prostokat2 = new Prostokat(3, 8, "Prostokąt 2");
  const prostokat3 = new Prostokat(4, 6, "Prostokąt 3");
  
  
  console.log(`Obwód ${prostokat1.nazwa}: ${prostokat1.obliczObwod()}`);
  console.log(`Pole ${prostokat1.nazwa}: ${prostokat1.obliczPole()}`);
  
 
  console.log(`Większy prostokąt: ${prostokat1.porownaj(prostokat2).nazwa}`);

  //zad2
  class Trojkat {
    constructor(wysokosc, podstawa, nazwa) {
      this.wysokosc = wysokosc;
      this.podstawa = podstawa;
      this.nazwa = nazwa;
    }
  
    obliczPole() {
      return 0.5 * this.podstawa * this.wysokosc;
    }
  
    
    static porownajPole(trojkat1, trojkat2) {
      const pole1 = trojkat1.obliczPole();
      const pole2 = trojkat2.obliczPole();
      
      if (pole1 > pole2) {
        return trojkat1;
      } else if (pole1 < pole2) {
        return trojkat2;
      } else {
        return null; 
      }
    }
  }
  
  
  const trojkat1 = new Trojkat(4, 5, "Trójkąt 1");
  const trojkat2 = new Trojkat(3, 6, "Trójkąt 2");
  const trojkat3 = new Trojkat(7, 8, "Trójkąt 3");
  
  
  const pole1 = trojkat1.obliczPole();
  console.log(`Pole ${trojkat1.nazwa}: ${pole1}`);
  
  
  const trojkatWiekszePole = Trojkat.porownajPole(trojkat1, trojkat2);
  if (trojkatWiekszePole) {
    console.log(`${trojkatWiekszePole.nazwa} ma większe pole.`);
  } else {
    console.log("Oba trójkąty mają takie samo pole.");
  }
  //zad3
  class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
      this.wysokosc = wysokosc;
      this.podstawa1 = podstawa1;
      this.podstawa2 = podstawa2;
      this.nazwa = nazwa;
    }
  
    obliczPole() {
      return 0.5 * (this.podstawa1 + this.podstawa2) * this.wysokosc;
    }
  }
  
  
  const trapez1 = new Trapez(4, 5, 7, "Trapez 1");
  const trapez2 = new Trapez(6, 8, 10, "Trapez 2");
  const trapez3 = new Trapez(2, 3, 6, "Trapez 3");
  
  
  const pole = trapez1.obliczPole();
  console.log(`Pole ${trapez1.nazwa}: ${pole1}`);

  //zad 4
  function calculateLargestShape() {
    
    const rectangleWidth = parseFloat(prompt("Podaj szerokość prostokąta:"));
    const rectangleHeight = parseFloat(prompt("Podaj wysokość prostokąta:"));
  
    
    const rectangleArea = rectangleWidth * rectangleHeight;
  
    
    const triangleBase = parseFloat(prompt("Podaj długość podstawy trójkąta:"));
    const triangleHeight = parseFloat(prompt("Podaj wysokość trójkąta:"));
  
    
    const triangleArea = (triangleBase * triangleHeight) / 2;
  
    
    const trapeziumTop = parseFloat(prompt("Podaj długość górnej podstawy trapezu:"));
    const trapeziumBottom = parseFloat(prompt("Podaj długość dolnej podstawy trapezu:"));
    const trapeziumHeight = parseFloat(prompt("Podaj wysokość trapezu:"));
  
    
    const trapeziumArea = ((trapeziumTop + trapeziumBottom) / 2) * trapeziumHeight;
  
    
    let largestShapeName = "";
    let largestShapeArea = 0;
  
    if (rectangleArea > largestShapeArea) {
      largestShapeName = "prostokąt";
      largestShapeArea = rectangleArea;
    }
  
    if (triangleArea > largestShapeArea) {
      largestShapeName = "trójkąt";
      largestShapeArea = triangleArea;
    }
  
    if (trapeziumArea > largestShapeArea) {
      largestShapeName = "trapez";
      largestShapeArea = trapeziumArea;
    }
  
    
    alert(`Największa figura to ${largestShapeName} o polu ${largestShapeArea}`);
  }
  calculateLargestShape();

// zad 6
  class Rectangle {
    constructor(width, height, name) {
      this.width = width;
      this.height = height;
      this.name = name;
    }
  
    changeName(newName) {
      this.name = newName;
    }
  }
  
  const rect = new Rectangle(10, 5, 'Prostokąt A');
  console.log(rect.name); // 'Prostokąt A'
  rect.changeName('Nowa nazwa');
  console.log(rect.name); // 'Nowa nazwa'
  
  //zad 1 +
  const numbers = [2, 7, 3, 8, 4, 5, 6, 9, 1];

const sum = numbers.reduce((acc, curr) => acc + curr);
console.log('Suma: ', sum);


const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Liczby parzyste: ', evenNumbers);


const multipliedNumbers = numbers.map(num => num * 3);
console.log('Liczby pomnożone przez 3: ', multipliedNumbers);


const albumNumber = 12345;
numbers.push(albumNumber);
console.log('Tablica z numerem albumu: ', numbers);
const albumIndex = numbers.indexOf(albumNumber);
console.log('Index numeru albumu: ', albumIndex);


const average = sum / numbers.length;
console.log('Średnia arytmetyczna: ', average);


const maxNumber = Math.max(...numbers);
console.log('Największa liczba: ', maxNumber);


const chosenValue = 5;
const count = numbers.filter(num => num === chosenValue).length;
console.log(`Ilość wystąpień wartości ${chosenValue}: `, count);
