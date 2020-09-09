const { inventoryItems } = require("./app");
function inventory() {
  return `${inventoryItems}`;
}
exports.inventory = inventory;
