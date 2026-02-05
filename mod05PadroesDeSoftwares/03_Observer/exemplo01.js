// SUJEITO (Subject)

// A classe WeatherStation representa o sujeito observado.
// Ela mantém o estado de interesse (temperatura) e a lista de observadores.
class WeatherStation {
  constructor() {
    // Lista de observadores registrados (relação um-para-muistos)
    this.observers = [];
    // Estado observado pelos observadores
    this.temperature = 0;
  }

  // Permite que um observador se registre para receber notificações
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Permite remover um observador da lista de inscritos
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Atualiza o estado do sujeito e dispara o processo de notificação
  setTemperature(temperature) {
    this.temperature = temperature;
    this.notifyObservers();
  }

  // Notifica todos os observadores registrados sobre a mudança de estado
  notifyObservers() {
    this.observers.forEach(observer => {
      // Chama o método update de cada observador,
      // propagando o novo estado de forma desacoplada
      observer.update(this.temperature);
    });
  }
}


// OBSERVADOR (Observer)

// A classe DisplayDevice representa um observador.
// Ela reage às mudanças notificadas pelo sujeito.
class DisplayDevice {
  constructor(name) {
    // Identificação do observador (ex.: tipo de display)
    this.name = name;
  }

  // Método chamado automaticamente pelo sujeito
  // quando ocorre uma mudança no estado observado
  update(temperature) {
    console.log(`${this.name} Display: Temperature is ${temperature}°C`);
  }
}


// CÓDIGO CLIENTE

// O código cliente cria o sujeito e os observadores
// e estabelece a relação entre eles.

// Instancia o sujeito
const weatherStation = new WeatherStation();

// Cria observadores concretos
const displayDevice1 = new DisplayDevice('Display 1');
const displayDevice2 = new DisplayDevice('Display 2');

// Registra os observadores no sujeito
weatherStation.addObserver(displayDevice1);
weatherStation.addObserver(displayDevice2);

// Alterações no estado do sujeito disparam notificações automáticas
weatherStation.setTemperature(25);
weatherStation.setTemperature(30);
