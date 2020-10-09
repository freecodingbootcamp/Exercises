# Exercises

This repo contains multiple directories with exercises in them.  

## How to get Started with This Repo

### Fork the Original Repo
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
