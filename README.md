# FeatureFit-PyOhio2019

[![Build
Status](https://travis-ci.com/gkapfham/FeatureFit-PyOhio2019.svg?branch=master)](https://travis-ci.com/gkapfham/FeatureFit-PyOhio2019)

This repository contains the HTML source code and additional resources for a
presentation that I, [Gregory M.
Kapfhammer](https://www.gregorykapfhammer.com/), gave during at the 2019 edition
of the PyOhio conference with [Madelyn
Kapfhammer](https://www.madelynkapfhammer.com/). The presentation's source code
uses the [Spectacle](https://github.com/FormidableLabs/spectacle) framework to
control the display of each slide. I have developed a custom theme for the
slides that manages the formatting, color scheme, and the use of icons. All of
the colors in the presentation come from the Material Design color palette.
Finally, the presentation uses icons from [Font
Awesome](https://fontawesome.com/).

## Installation Instructions

You can type the following command if you want to clone this repository:

```shell
git clone https://github.com/gkapfham/pyohio2018-presentation.git
```

Now you should install of all of the packages needed for the presentation:

```shell
npm install
```

Finally, you may need to ensure the correct version of the Babel loader. This
command was suggested in the issue tracker for Spectacle; it sometimes resolved
a problem that I was experiencing when I tried to build and display the
presentation. Please consider trying this command if the presentation does not
build and display correctly.

```shell
npm install babel-loader@next
```

Please note that this `package.json` file will lead to the installation of a
wide variety of Node modules, including required for the use of Font Awesome and
the Socket.io server needed to ensure that the display and presenter modes can
communicate correctly. These installation instructions were tested on an Ubuntu
16.04 workstation running the 3.9.5 version of `npm`.

## Displaying and Giving the Presentation

To start the rendering and display of the presentation type the command `npm
start` in your terminal window. If you want to display the presentation to your
audience, you can go the [audience-mode site](http://localhost:3000/#/). If you
want to see the presentation slides in a presenter mode, you can go to the
[presenter-mode site](http://localhost:3000/#/?presenter&timer).

## Debugging the Presentation

Since these slides are implemented in the
[Spectacle](https://github.com/FormidableLabs/spectacle) framework, you may need
to use Chrome or Firefox Developer Tools, augmented with the React Developer
Plugin, to resolve errors that prevent the slides from displaying correctly. In
my experience, it is also important to use Developer Tools to check the slides
at different simulated resolutions so as to ensure that they display properly
when connected to a projector.

## Problems or Praise

If you have any problems with installing or displaying this presentation, then
please raise an issue associated with this Git repository using the "Issues"
link at the top of this site. I will do everything that I can to resolve your
issue and ensure that the presentation works correctly.
