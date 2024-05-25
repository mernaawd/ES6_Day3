//proxy
var obj ={
    name: "merna",
    age: 25,
    address:"october"
  };
  console.log(obj.name);
  handler = {
    //trap get
    get: function (target, prop, proxy) {
      console.log(arguments);
      if (!(prop in target)) {
        throw "this prop is not found";
      }
      return target[prop];
    },
    //trap set
    set: function (target, prop, val, proxy) {
      console.log(arguments);
      if (!(prop in target)) {
        throw `this ${prop} is not found`;
      }
      if(prop == "name"){
        if (isFinite(val)) {
            throw `your name must be string`;
          }
          else if(val.length<7){
            throw `you must enter 7 characters`;
          }
          target[prop] = val;
      }
      if(prop == "address"){
        if (isFinite(val)) {
            throw `your address must be string`;
          }
          target[prop] = val;
      }
      if (prop == "age") {
        if (typeof val !== "number") {
          throw `prop must be number`;
        }
        else if(25>val||val>60){
          throw `this site is not suitable for you`;
        }
      }
      target[prop] = val;
    },
  };
  var p1 = new Proxy(obj, handler);

  console.log(p1);
  p1.name="merna awd"
  p1.address = 2;
  p1.name = "mero";
  p1.age = 65;
  console.log(p1, obj);
  console.log(p1.name);
  
  