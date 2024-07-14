/**
 * Adapter is a structural design pattern, which allows incompatible objects to collaborate.
 * 
 * The Adapter acts as a wrapper between two objects. It catches calls for one object and 
 * transforms them to format and interface recognizable by the second object.
 */

class Target {
  public request(): string {
      return 'Target: default behaviour.';
  }
}

class Adaptee {
  public specificRequest(): string {
      return '.roivaheb laicepS';
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
      super();
      this.adaptee = adaptee;
  }

  public request(): string {
      const result = this.adaptee.specificRequest().split('').reverse().join('');
      return `Adapter: (TRANSLATED) ${result}`;
  }
}

function clientCode(target: Target) {
  console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a specific interface.');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);