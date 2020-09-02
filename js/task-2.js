// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.



const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

// Higher-Order Function
const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

// call
invokeInventoryAction('Medkit', inventory.add.bind(inventory));
////////// Invoking action on Medkit
////////// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
// call
invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
///////// Invoking action on Gas mask
///////// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']