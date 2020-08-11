// https://jsmanifest.com/the-builder-pattern-in-javascript/

// module assigned to const
        const FrogBuilder = (function () {

            // private inner class is not exported...
            class Frog {
                constructor(name, weight, height, gender) {
                    this.name = name
                    this.weight = weight // in lbs
                    this.height = height // in inches
                    this.gender = gender
                }
                eat(target) {
                    console.log(`Eating target: ${target.name}`)
                }
            }

            // public class is the builder, which constructs the Frog
             // from the inner class.
            return class FrogBuilder {
                // constructor(name, gender) {
                //     this.name = name
                //     this.gender = gender
                // }
                setName(name) {
                    this.name = name;
                    return this;
                }
                setGender(gender) {
                    this.gender = gender;
                    return this;
                }
                setWeight(weight) {
                    this.weight = weight
                    return this
                }
                setHeight(height) {
                    this.height = height
                    return this
                }
                build() {
                    if (!('weight' in this)) {
                        throw new Error('Weight is missing')
                    }
                    if (!('height' in this)) {
                        throw new Error('Height is missing')
                    }
                    return new Frog(this.name, this.weight, this.height, this.gender)
                }
            }
        })();

        const leon = new FrogBuilder()
            .setName('Leon')
            .setGender('male')
            .setWeight(14)
            .setHeight(3.7)
            .build();

        const marie = new FrogBuilder()
            .setName('Marie')    
            .setGender('female')    
            .setWeight(12)
            .setHeight(3.2)
            .build();
            
console.log(marie);
console.log(leon);
