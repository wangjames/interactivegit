import Directory from "./Directory";
import Branch from "./Branch";
let Event_1_Branch = new Branch();
let Event_1_Object = new Directory();
Event_1_Object.createFolder("TextFiles");
Event_1_Object.traverseToChild("TextFiles");
Event_1_Object.createFile("Introduction");
Event_1_Object.createFile("Climax");
Event_1_Object.createFile("Ending");
Event_1_Object.traverseBackwards();
let Event_1_Message = "Initial Commit";

Event_1_Branch.addCommit(Event_1_Object, Event_1_Message);

let Event_2_Branch = Event_1_Branch.copy_branch();
let Event_2_Object = Event_1_Object.copy_directory();
Event_2_Object.traverseToChild("TextFiles");
Event_2_Object.createFile("Epilogue");
Event_2_Object.traverseBackwards();
let Event_2_Message = "Added Epilogue";

Event_2_Branch.addCommit(Event_2_Object, Event_2_Message);

let event_array = [["push", Event_1_Branch], ["push", Event_2_Branch]];

export default event_array;