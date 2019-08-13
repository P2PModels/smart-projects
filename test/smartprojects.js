const SmartProjects = artifacts.require("SmartProjects");

contract("SmartProjects", accounts => {
  it("...should store the project Test.", async () => {
    const smartProjectsInstance = await SmartProjects.deployed();

    // Set value of 89
    await smartProjectsInstance.addProject('0x54657374', { from: accounts[0] });

    // Get stored value
    const storedData = await smartProjectsInstance.projects.call();

    assert.equal(storedData, '0x54657374', "The project Test was not stored.");
  });
});
