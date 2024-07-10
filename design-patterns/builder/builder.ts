/**
 * Builder is a creational design pattern that lets you construct complex objects step by step.
 * The pattern allows you to produce different types and representations of an object using the same construction code.
 *
 * For this example Builder pattern will be used to build a hot-dog.
 */

export default class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public onion?: boolean,
    public pickle?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addOnion() {
    this.onion = true;
    return this;
  }
  addPickle() {
    this.pickle = true;
    return this;
  }

  present() {
    let str = `This hot-dog in ${this.bread} bread has `;
    this.ketchup ? (str += "ketchup, ") : null;
    this.mustard ? (str += "mustard, ") : null;
    this.onion ? (str += "onions, ") : null;
    this.pickle ? (str += "pickle, ") : null;
    return str.slice(0, -2) + ".";
  }
}

/**
 * We can create different variations of hot dogs using same object.
 *  Example use case:
 */

// order 1

const hotdog1 = new HotDog("wheat");
hotdog1.addKetchup().addMustard().addPickle();
console.log(hotdog1.present());

// order 2

const hotdog2 = new HotDog("wheat");
hotdog2.addMustard().addOnion();
console.log(hotdog2.present());
