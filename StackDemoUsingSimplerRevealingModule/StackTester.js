// StackTester.js

const StackTester = (() => {
    var public = {};

    public.test = () => {
        var stack = Stack();

        console.log('should be 0 = ' + stack.length());
        stack.push(5); // [5]
        stack.push(7); // [5, 7]

        console.log('should be 7 = ' + stack.pop());
        console.log('should be 5 = ' + stack.pop());
        console.log('should throw Error');
        console.log(stack.pop());
    }

    return public;
});

const stackTester = StackTester();