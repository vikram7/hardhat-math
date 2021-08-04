const { expect } = require("chai");

describe("Math", function () {
  it("Change value", async function () {
    const Math = await ethers.getContractFactory("Math");
    const math = await Math.deploy(2);
    await math.deployed();

    const changeValue = await math.changeNumTo(5);
    await changeValue.wait();

    expect(await math.x()).to.equal(5);
  });

  it("doubles x", async function () {
    const Math = await ethers.getContractFactory("Math");
    const math = await Math.deploy(8);
    await math.deployed();

    const doubleX = await math.doubleX();
    await doubleX.wait();

    expect(await math.x()).to.equal(16);
  });
});
