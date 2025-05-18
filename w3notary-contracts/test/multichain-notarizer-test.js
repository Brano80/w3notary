```javascript
// Import the required modules
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiChainNotarizer", function () {

  let multiChainNotarizer;

  beforeEach(async function () {
    // Deploy contract
    const MultiChainNotarizer = await ethers.getContractFactory("MultiChainNotarizer");
    multiChainNotarizer = await MultiChainNotarizer.deploy();
    await multiChainNotarizer.deployed();
  });

  // test cases for each method in the contract

  describe("test case template", function () {
    it("should do something", async function () {
      // logic for test case
    });
  });

});
```
Make sure to replace the placeholders (like "should do something") with your actual test logic and descriptions. Also, add as many test cases as there are methods in your contract for comprehensive testing. This is just a template so you will need to customize the logic to fit your needs.