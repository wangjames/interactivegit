var text_object_1 = `With email, you simply set up an account on one of the major email providers such as Gmail and Yahoo and then you sign in.
Once signed in, you can easily email anyone you want through their interface.

With Git, it is a little bit more involved. You first still need to setup an account with one of the major Git repository providers such as Github or Bitbucket. 
Once you do that, you need to sign in and create a repository. 
Through creating a repository, this creates a remote link that anyone can then access and send messages to.

Throughout these tutorials, you will be using a fake public Repository provider called GitBoat that will simulate the workflow on Git. `
 
var text_object_2 = `Sign in with the following credentials
 
User: CaptainFish
Password: ShimaAji
 
Create a repository.`
 
var text_object_3 = `In this screen, GitBoat is giving you a remote link that you and all of your collaborators will use to configure their local repositories.
After being configured with this link, your local repository will push commits to this repository on GitBoat. `
 
var text_object_4 = `Now we will create our local repository, and configure it properly. 
 
Create a directory called test.
 
Type in git init.
 
Type in git remote set-url origin test.git.`

var text_array = [text_object_1, text_object_2, text_object_3, text_object_4]

export default text_array;