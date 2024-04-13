# borderlinefever.neocities.org

A website initially designed for the Interference Pattern music video, a project between Borderline Fever and Sheridan
college.

> [Visit the website here](https://borderlinefever.neocities.org)!

![the Interference Pattern logo](/static/logo/logo-colour.png)
![the Sheridan logo](/static/logo/sheridan-logo.png)

## Setup and Running Locally

_These instructions are generally written for Windows computers. If you are on Linux or macOS, the instructions are
different, but you should know what you're doing in that case =) [contact webcrawls for help if you need it]_

### Dependencies

- Make sure you have a copy of [node.js](https://nodejs.org/en/download/current) downloaded and installed.
- Download Git ([Download for Windows](https://git-scm.com/downloads))
    - if you're running this installer, it'll ask you a lot of questions. you should be OK to leave everything default -
      don't touch stuff unless you know what you're doing =)
    - when the installation is finished, you should have a new program called '**Git Bash**'

### Clone the Repository

1. Open your file explorer and find/create a folder you want the website code to live within.
2. Enter that folder, hold CTRL+Shift and right-click on an empty part of the folder. You should see the option 'Open
   Git
   Bash Here'.
3. Next, run `git clone https://github.com/webcrawls/PATTERN`. You can either type this out manually, or copy from this
   page, and right-click in the Git Bash window and select "Paste".
4. This command will download the code. You should see a new folder called 'PATTERN'. Success!

### Run the website locally

1. Make sure you have the latest version by running `git pull`. If you _just_ ran `git clone`, then you shouldn't need
   to do this.
2. Open a Git Bash instance inside this folder, by navigating your file explorer to the PATTERN folder and pressing
   ctrl+shift+right-click on an empty part of the window.
3. Type `npm install` inside Git Bash and press enter. This will download all necessary dependencies to run the website.
4. After `npm install` finishes, run `npm dev` to run a local version of the website. Once this command is ran, it
   should show a URL such as `http://localhost:5173`. Navigating to this URL in the browser will bring you to the
   website.

### Build a production-ready version of the website

_If you are looking to build the full HTML-version of the website, follow these instructions._

1. Ensure you have the latest version by running `git pull` in the terminal.
2. Ensure you have the `npm` dependencies by running `npm install`.
3. Run `npm run build` to compile the website. The output will be in the `build/` folder, which you can upload the
   contents of to most web hosts.