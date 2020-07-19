// FacadePatternClient.js

// private
const readlineSync = require('readline-sync');
const ShopKeeper = require('./ShopKeeper');


/*
Easier to make the JavaScript code fit what was written in Java than to change
every single System.out...

- Demonstrates the concept of substituting an implementation with another centrally.
*/
const System = {
    out: {
        print: (str) => {
            console.log(str);
        }
    }
}

// private var
var choice;

class FacadePatternClient {

    // public method
    main() {
        do {
            System.out.print("========= Mobile Shop ============ \n");
            System.out.print("            1. IPHONE.              \n");
            System.out.print("            2. SAMSUNG.              \n");
            System.out.print("            3. BLACKBERRY.            \n");
            System.out.print("            4. Exit.                     \n");
            //System.out.print("Enter your choice: ");

            choice = readlineSync.question('Enter your choice: ');
            const sk = new ShopKeeper();

            // switch (choice) {
            //     case 1:
            //         {
            //             sk.iphoneSale();
            //         }
            //         break;
            //     case 2:
            //         {
            //             sk.samsungSale();
            //         }
            //         break;
            //     case 3:
            //         {
            //             sk.blackberrySale();
            //         }
            //         break;
            //     default:
            //         {
            //             System.out.println("Nothing You purchased");
            //         }
            //         return;
            // }

        } while (choice != 4);
    }
}  

const facadePatternClient = new FacadePatternClient();
facadePatternClient.main();
