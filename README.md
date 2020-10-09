# Exercises

This repo contains multiple directories with exercises in each one of them.  

## How to get Started with This Repo

### Fork the Original (this) Repo
To complete these exercise you need to fork this repository,

![GitHub Repo fork button](https://raw.githubusercontent.com/Team-FCB/Assets/master/forking.png)

### Clone (your version of) the Repo
Next step is to clone it to your local computer. Make sure you are cloning from you GitHub repo not the original author's. Copy the [REPO_URL] Then run the command

    git clone [REPO URL] [Folder_Name]

[Folder_Name] above is optional

![git clone steps](https://s8.gifyu.com/images/git-clone.gif)

### Install jest
jest is a JavaScript testing library. Here is how to install it

 1. Open up the terminal and cd into the directory where you cloned the repo into
 2. cd into JavaScript-Level-1 directory so `cd JavaScript-Level-1`
 3. run `npm install`
 4. run `npm install jest`
 5. Confirm that it worked by running `ls` and making sure there is node_modules directory and a package-lock.json file

### Create New Branch
Once you have this repository downloaded to your computer you must create a new branch in the following name format:

cohort_[cohort # here]_[your first name]

To create a new branch run the following command:

    git checkout -b cohort_[cohort # here]_[your first name]

Don't forget to replace the cohort number and first name.

![git checkout -b branch_name command](https://s8.gifyu.com/images/git-checkout-branch.gif)

### Push Up Changes
Now you are ready to make changes and implement your solutions. Once you have completed the exercises you need to push up your changes. Don't forget to push it up to the new branch not main.

Run the following commands:

    git add .
    git commit -m "what has changed"
    git push origin cohort_2_avan

You can also run in one line by adding the && in between the commands.

![git add commit push command combo](https://s8.gifyu.com/images/git-push.gif)

## Testing Your Solutions

There is a way to test your solutions to see if you implemented the functions correctly.

To test if you implemented the functions correctly run the following command **in the directory where you want to do the testing**.

    npm run test

![npm run test command](https://s8.gifyu.com/images/npm-run-test.gif)

## To Get Updates from the Original Repo

So you want to get the latest coding exercises from the original repo. Here is how you can do
**WITHOUT** the terminal. Go on GitHub.com, login and then follow the following instructions:

1.  Open your fork on GitHub.
2.  Click on  `Pull Requests`.
3.  Click on  `New Pull Request`. By default, GitHub will compare the original with your fork, and there shouldn’t be anything to compare if you didn’t make any changes.
4.  Click on  `switching the base`. Now GitHub will compare your fork with the original, and you should see all the latest changes.
5.  Click on  `Create a pull request`  for this comparison and assign a predictable name to your pull request (e.g., Update from original).
6.  Click on  `Create pull request`.
7.  Scroll down and click  `Merge pull request`  and finally  `Confirm`  merge. If your fork didn’t have any changes, you will be able to merge it automatically.
- [Original Stackoverflow Answer](https://stackoverflow.com/questions/3903817/pull-new-updates-from-original-github-repository-into-forked-github-repository#:~:text=Open%20your%20fork%20on%20GitHub,didn%27t%20make%20any%20changes.)

Once you have done so you need you need to merge your branch (cohort_#_name) with the newly updated main branch.

### Merge Main with You Custom Branch

Run the following commands:

 1. `git checkout main`

You might have to add, commit, push your changes on the current branch before you can switch to main.

2. `git pull origin main`

This will pull the new changes that you pulled from the original repo to the main branch on your local computer.

3. `git checkout [cohort_#_name]`

Let's switch back to our other branch. Make sure to replace `[cohort_#_name]` correct branch name.

4. `git merge main`

This is the actual merge command. You will most likeley have some conflicts.

![mege conflict screenshot](https://raw.githubusercontent.com/Team-FCB/Assets/master/merge-conflict.png)

Go ahead and resolve them. Open your favorite code editor and open the folder you are working on.  Then find the files where there is a conflict and resolve them by picking either blue or pink (I think it's pink).

![resolving merge conflict](https://raw.githubusercontent.com/Team-FCB/Assets/master/conflict-resolve.png)

Once you have resolved all the conflicts in all the files. You can push your changes back up.

So for the final step just run the following commands:

    git add .
    git commit -m "YOUR MESSAGE HERE"
    git push origin [BRANCH NAME HERE, NOT MAIN]

You might have to enter your github credentials.

And that's it! You have the latest and greatest code bases along with your changes.

![Jim Carrey being Jim Carrey](https://media.giphy.com/media/itDBteCsTFSVO/giphy.gif)
