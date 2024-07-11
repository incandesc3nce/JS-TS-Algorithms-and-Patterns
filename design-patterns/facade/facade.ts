/**
 * Facade is a structural design pattern that provides a simplified (but limited)
 * interface to a complex system of classes, library or framework.
 *
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */

class Subsystem1 {
  public operation1(): string {
    return "Subsystem1: Ready!\n";
  }

  public operation2(): string {
    return "Subsystem1: Go!\n";
  }
}

class Subsystem2 {
  public operation1(): string {
    return "Subsystem2: Get ready!\n";
  }

  public operation2(): string {
    return "Subsystem2: Fire!";
  }
}

class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  public operation(): string {
    let result = "Facade initializes subsystems:\n";
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += "Facade orders subsystems to perform the action:\n";
    result += this.subsystem1.operation2();
    result += this.subsystem2.operation2();

    return result;
  }
}

/**
 * The client code works with complex subsystems through a simple interface
 * provided by the Facade. When a facade manages the lifecycle of the subsystem,
 * the client might not even know about the existence of the subsystem. This
 * approach lets you keep the complexity under control.
 */

const facade = new Facade(new Subsystem1(), new Subsystem2());

/**
 * also can be done with "const facade = new Facade();"
 * to hide the complexity of the subsystems even more
 */

console.log(facade.operation());
