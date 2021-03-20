# Codeclimate Test Repo
Playground to test out automated code quality / linting comments on fellow work.

# Set up PR comments with Codeclimate
This has been done for the test repo, but you'll need to take these steps in the Code Climate UI for any other repos to enable GitHub PR comments.

[Code Climate's documentation for this is here](https://docs.codeclimate.com/docs/github-pull-requests)

The manual setup is laborious on a per repo basis but Pursuit has ~1,000 repos so we can't give Code Climate blanket authorization. In the future we can try to use the Code Climate API to automate these steps.

## Sign up / Log in
1. Go to the [Code Climate site](https://codeclimate.com/)
1. Choose `Login > Quality`
1. Use your GitHub account to sign up or log in
1. Choose the `Open Source` organization (or joinpursuit if that is an option)
1. This should take you to a dashboard screen that lists Repositories

## Adding the repo
1. Make sure your repo is public.
1. Click `Add a repository`
1. After Code Climate has synced the GH repos you're associated with, scroll down and find the repo you want to add. Click `Add Repo`.
1. You'll see Code Climate do some build steps that should take ~2 minutes
1. When the success modal appears, click `See Results` to go to the repo view. [The view for this repo is here.](https://codeclimate.com/github/joinpursuit/codeclimate-test-repo)
**Troubleshooting**
- Your repo may need to be public.
- Code Climate's idea of alphabetical order is A-Z, then a-z

## Configuring GitHub PR comments
1. Choose the `Repo Settings` tab
1. Choose `GitHub` on the left menu.
1. Click `Pull request comments > Set up`
1. Go through the Oauth flow to authorize Codeclimate:
1. Choose the `Pursuit org`
1. **Important** Choose `Only select repositories` and select your repo, then click `Install`
1. You'll be dumped on github.com so you'll need to navigate back to the `Repo Settings > GitHub` UI on Code Climate
1. Flip on the toggle for `Inline issue comments`
1. Set maximum number of comments per issue to your desired number (5 is the default; this repo is set to 10)
1. Hit `Save`
1. This repo also has `Pull request status updates` installed. I am not sure if this is a requirement in order to get the inline PR comments.
