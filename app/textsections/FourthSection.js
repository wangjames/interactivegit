var text_object_1 = `There are times where users may want to experiment with the project, and they want a way for these experiments to not be shared as an official change to the main project.
Git gives us a way to do this through creating branches.`
 
var text_object_2 = `For example, let us imagine that we are writing an essay with a dog as a pet of the main protagonist. 
We write the story, the dialogue, and all of the relationships around the fact that there is a dog as a the main character’s pet.
Later on, the head writer of this essay wants to experiment with having a cat as the pet of the main protagonist. 
When the writer goes to write all of the elements of the story again, he or she is probably not going to want to overwrite all of the work with the dog as the pet,
but at the same time, he or she will want to keep this work associated with the current work.`
 
var text_object_3 = `Within Git, the writer can achieve this by creating a branch called cat-story or any other name he or she desires through the git branch command.
This creates another copy of the repository where you can use the same workflow as before, but it is kept separate from all of the other branches.
By default, there is a master branch. (Note: When creating a branch, a copy of all of the commits from the branch that you are switching from are made.
Work that has not been committed will not be transferred over)`
 
var text_object_4 = `The syntax for the git branch command is git branch <branchname>.
For example, to create a cat-story branch, you use the following command: git branch cat-story.
 
Do this now. 
 
Create a cat-story branch.`
 
var text_object_5 = `Now that it has been created, you must use the checkout command. The checkout command takes a branch and its version of the repository and makes it the one available on your computer.
For example, if you want to be working on the cat-story version of your play, use the command git checkout cat-story.
This will change your directory on your computer to view your cat-related story items.
If you want to look at the original version of your essay, type in git checkout master.
 
Do this now.
 
Checkout the cat-story branch.`
 
var text_object_6 = `Notice now that all of the elements are cat-story elements.
 
Checkout the master branch.`
 
var text_object_7 = `Notice now that all of the elements are dog-story elements now.`

var text_array = [text_object_1, text_object_2, text_object_3, text_object_4, text_object_5, text_object_6, text_object_7]

export default text_array;