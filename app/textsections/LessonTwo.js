var text_object_1 = `With email, you simply set up an account on one of the major email providers such as Gmail and Yahoo and then you sign in.
Once signed in, you can easily email anyone you want through their interface.

With Git, it is a little bit more involved. You first still need to setup an account with one of the major Git repository providers such as Github or Bitbucket. 
Once you do that, you need to sign in and create a repository. 
Through creating a repository, this creates a remote link that anyone can then access and send messages to.

Throughout these tutorials, you will be using a fake public Repository provider called GitBoat that will simulate the workflow on Git. `
 
var text_object_2 = `Sign in with the following credentials
 
User: CaptainFish
Password: ShimaAji
 
Create a repository.

Click on the repository that you created in the list.`
 
var text_object_1 = [`In this screen, GitBoat is giving you a remote link that you and all of your collaborators will use to configure their local repositories.
After being configured with this link, your local repository will push commits to this repository on GitBoat.`, `Copy this link to your clipboard.`]
 
var text_object_2 = [`Now we will create our local repository similar to how we did it for Lesson One, and configure it properly.`,
 
`Initialize a git repository in the root directory using git init.`,

`Create several files or folders.`,

`Add files to staging area using git add.`,

`Commit these files.`]

var text_object_3 = [`Now that we've made a commit, we want to push our version of our branch to GitBoat so that everyone can see it.`,

`First we need to use the link that we copied to configure our repository properly.`,

`Type git remote add origin <linkname>. For example, if your repository that you created has the link test.git, then type git remote add origin test.git.`]

var text_object_4 = [`Now that your repository is correctly configured, you can push your commits to the repository. The way we do this is by pushing our entire
branch to the repository.`,

`Execute the command git push origin master. What this does is it pushes the branch master to the remote origin.`]

var text_object_5 = [`Go to the GitBoat visualization and see that the repository that you've pushed to now has the commits that you wanted.`]

var text_array = [text_object_1, text_object_2, text_object_3, text_object_4, text_object_5]

export default text_array;