var text_object_1 = `A comparison between Email and Git.`
 
var text_object_2 = `With collaboration over email, one person can send a message to one person or many people.
                    In this message, the sender can send the entire project or maybe only parts of the project to the recipients.
                    These messages can form message chains where recipients reply to the same thread of conversation, but these message chains are ultimately completely independent from other message chains.
                    One chain has no knowledge of the contents of the other chain. There is no central process that coordinates all of these emails.
                    There is no interface that shows the history of changes being made to a file.
                    Furthermore, the only ways to organize these chains is into folders and by time of the message received.`
 
var text_object_3 = `With collaboration over Git, there is a single repository that holds all of a project’s files.
                    This repository is hosted on a public site such as Github or Bitbucket.
                    Every collaborator on this project makes a copy of this repository to their local computer (a process called cloning) and it is through this local copy of this repository that a user is able to collaborate on the project.
                    With email, users can send anything they want to anyone they want. However with Git, users can only send a message to the central repository, and this message must contain a version of the entire project.
                    This version of the entire project can involve anything. It could be a version of the project where the user added a single letter to a single file or it could be a version of the project where the user deleted an entire folder of files.
                    In the end, these versions of the projects are called commits. The user starts out with a version that is considered the master or up to date version of the repository and then makes a commit by making changes to this version.
                    The user then changes the public version of the repository to match his or her version of the repository in a process called pushing to the repository. This version is then the new up-to-date version.`
 
var text_object_4 = `Furthermore, a main advantage of Git is that it tracks these changes in a history so that users can see the different versions of the repository through a list of commits.
                     There is an organized workflow for creating different branches of the project.
                     If someone wants to experiment with the project, it is possible for that user to take a copy of the project and make changes and commits that are only applied to that specific copy of the project.
                     With this copy, it is then possible to reintegrate this experiment with the main project in an organized way called merging.
                     Finally, a major feature is the ability to rollback changes to a previous version of the project.`
                     
var text_array = [text_object_1, text_object_2, text_object_3, text_object_4];

export default text_array;
