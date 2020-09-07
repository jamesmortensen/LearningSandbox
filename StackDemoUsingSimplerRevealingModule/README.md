This is a demo of a simpler revealing module pattern.  Instead of returning each public method individually in the return block, we create a variable object called public and attach all public methods here. We then return only the public object containing public methods.  PRivately scoped variables, such as elements array and the size integer, remain privately scoped inside the module.

Unlike the module pattern, we don't have to switch to object-literal notation for the things we make public.
