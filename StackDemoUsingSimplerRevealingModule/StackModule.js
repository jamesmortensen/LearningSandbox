// StackModule.js

const Stack = (function() {
    var size = 0;
    var elements = [];

    var public = {};

    public.pop = () => {
        if(size === 0)
            throw new Error('No elements in stack.');
        return elements[--size];
    }

    public.push = (value) => {
        elements[size++] = value;
    }

    public.length = () => {
        return size;
    }

    return public;
});
