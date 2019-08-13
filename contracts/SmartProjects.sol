pragma solidity ^0.5.0;

contract SmartProjects {

  constructor() public {
  }

    mapping(bytes32 => Project) projects;

    struct Project {
        address organizer;
        mapping(address => bool) members;

    }

    event AddProject(address indexed entity, bytes32 projectName);
    event RemoveProject(address indexed entity, bytes32 projectName);
    event JoinProject(address indexed entity, bytes32 projectName);
    event LeaveProject(address indexed entity, bytes32 projectName);

    function addProject(bytes32 projectName) public {
        projects[projectName] = Project(msg.sender);
        emit AddProject(msg.sender, projectName);
    }

    function removeProject(bytes32 projectName) public {
        // require(!!projects[projectName], "Project does not exist");
        // require msg.sender == project.organizer
        delete projects[projectName];
        emit RemoveProject(msg.sender, projectName);
    }

    function joinProject(bytes32 projectName) public {
        // require(!!projects[projectName], "Project does not exist");
        projects[projectName].members[msg.sender] = true;
        emit JoinProject(msg.sender, projectName);
    }

    function leaveProject(bytes32 projectName) public {
        // require(!!projects[projectName], "Project does not exist");
        projects[projectName].members[msg.sender] = false;
        emit LeaveProject(msg.sender, projectName);
    }
}
