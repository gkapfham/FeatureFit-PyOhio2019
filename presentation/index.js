/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

{/* Support style modification with emotion */ }
import styled from 'react-emotion';

{/* Load in the components provided by spectacle */ }
import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from 'spectacle';

{/* Load in an external plugin */ }
// import Terminal from '../improved_modules/spectacle-terminal';

{/* Load in a modified external plugin */ }
// import CodeSlide from '../improved_modules/spectacle-code-slide';

import { Backpack } from 'react-kawaii';
import { Cat } from 'react-kawaii';

{/* Use the preloader for the images */ }
import preloader from 'spectacle/lib/utils/preloader';

{/* Import the theme */ }
import createTheme from '../default';

require('normalize.css');

{/* Load all of the images */ }
const images = {
  BlackFormatting: require('../assets/images/FFBlackFormatting.gif'),
  TabCompletion: require('../assets/images/FFTabComplete.gif'),
  Linting: require('../assets/images/FFLinting.gif'),
  FixHardcode: require('../assets/images/FixHardcode.gif'),
  FuzzyFile: require('../assets/images/FuzzyFile.gif'),
  OpenAndTests: require('../assets/images/OpenAndTests1.gif'),
  AddTmpdir: require('../assets/images/AddTmpdir.gif'),
  CodeFormatting: require('../assets/images/CodeFormatting.gif'),
  Coverage: require('../assets/images/Coverage.gif'),
  FailedTest: require('../assets/images/FailedTest.gif'),
  RerunCoverage: require('../assets/images/RerunCoverage.gif'),
  RerunTests: require('../assets/images/RerunTests.gif'),
  Typecast: require('../assets/images/Typecast.gif'),
  VirtualEnvironment: require('../assets/images/VirtualEnvironment.gif'),
  Hardcoded: require('../assets/images/Hardcoded.png'),
  VimBasics: require('../assets/images/vim-basics-opt.gif'),
  StartProject: require('../assets/images/start-project-opt.gif'),
  RunTestsVim: require('../assets/images/run-tests-opt.gif'),
};
preloader(images);

{/* Minimal horizontal padding between rows */ }
var minimalHorizontalPadding = 20;

{/* Standard horizontal padding between rows */ }
var standardHorizontalPadding = 40;

{/* Standard all-side margin size */ }
var standardMargin = 40;

{/* FontAwesome: Define the colors for the theme */ }
var primary = '#FFF8DC';
var secondary = '#F4511E';
var secondarylight = '#ff6e40';
var tertiary = '#00897B';
var lighttext = '#9e9e9e';
var darktext = '#424242';
var lighttext = '#9e9e9e';

{/* Spectacle: Define the colors for the theme */ }
const theme = createTheme({
  primary: '#FFF8DC',
  secondary: '#F4511E',
  secondarylight: '#ff6e40',
  tertiary: '#00897B',
  darktext: '#424242',
  lighttext: '#9e9e9e'
});

{/* Create a emotion-styled Fill with padding */ }
const PaddedFill = styled(Fill)`
  margin-right: 110px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */ }
const BottomPaddedFill = styled(Fill)`
  margin-bottom: 40px;
  justify-content: space-between;
`;

{/* Import all of the libraries from FontAwesomeIcon */ }
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

{/* Add all of the libraries to the main library */ }
library.add(fab, far, fas)

{/* Declare all of the specific icons used in the slides */ }

export const Twitter = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" transform="left-2" color='#00897B' />
  </div>
)

export const Web = () => (
  <div>
    <FontAwesomeIcon icon={['fas', 'globe']} size="3x" transform="left-2" color='#00897B' />
  </div>
)

export const Laptop = () => (
  <FontAwesomeIcon icon={['fas', 'laptop']} size="2x" transform="down-3, left-2" color={darktext} />
)

export const Check = () => (
  <FontAwesomeIcon icon={['fas', 'check']} transform="grow-10" color={darktext} />
)

export const Bolt = () => (
  <FontAwesomeIcon icon={['fas', 'bolt']} transform="grow-10" color={darktext} />
)

export const Smile = () => (
  <FontAwesomeIcon icon={['fas', 'smile']} transform="grow-10" color={darktext} />
)

export const Custom = () => (
  <FontAwesomeIcon icon={['fas', 'paint-brush']} transform="grow-20" color={darktext} />
)

export const Download = () => (
  <FontAwesomeIcon icon={['fas', 'download']} transform="grow-20" color={darktext} />
)

export const Codes = () => (
  <FontAwesomeIcon icon={['fas', 'code']} transform="grow-20" color={darktext} />
)

export const Heartbeat = () => (
  <FontAwesomeIcon icon={['fas', 'heartbeat']} size="2x" transform="down-3, left-2" color={darktext} />
)

export const Fast = () => (
  <FontAwesomeIcon icon={['fas', 'fighter-jet']} size="8x" transform="grow-15, right-15, down-8" color={darktext} />
)

export const HeartGiant = () => (
  <FontAwesomeIcon icon={['fas', 'heart']} transform="grow-40" color={tertiary} />
)

export const Coverage = () => (
  <FontAwesomeIcon icon={['fas', 'umbrella']} transform="grow-70" color={tertiary}/>
)

export const QuestionMark = () => (
  <FontAwesomeIcon icon={['fas', 'question']} transform="grow-40" color={darktext} />
)

export const Keyboard = () => (
  <FontAwesomeIcon icon={['fas', 'keyboard']} transform="grow-40" color={darktext} />
)

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {

    {/* Create the Deck of slides with no controls and no progress bars */ }
    return (
      <Deck
        contentHeight={700}
        contentWidth={1024}
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress={'none'}
      >

        {/* Slide { */}
        <Slide transition={['slide']} bgColor="primary">

          <Heading size={1} fit lineHeight={1.2} bold textColor="darktext">
            Find Your Feature Fit
          </Heading>

          <Heading size={1} fit lineHeight={1.2} bold textColor="secondary">
            How to pick a text editor for Python programming
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>

          <Text fit bold textColor="tertiary">
            Gregory M. Kapfhammer
          </Text>

          <Text fit bold textColor="tertiary">
            Madelyn M. Kapfhammer
          </Text>

          <Text bold textSize="1.5em" textColor="tertiary">
            PyOhio 2019
          </Text>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide margin={-10} transitionDuration={0} transition={['']} bgColor="primary">

          <Layout>
            <BottomPaddedFill>
              <Text bold fit textColor="darktext">
                Hi! Glad to be Back at PyOhio!
              </Text>
            </BottomPaddedFill>
          </Layout>

          <Layout>
            <Fill>
              <Text bold fit caps textColor="secondary">
                Gregory M. Kapfhammer
              </Text>
            </Fill>
          </Layout>

          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fit>
              <Twitter />
            </Fit>
            <Fit>
              <Text fill bold textSize="2em" textColor="tertiary">
                @GregKapfhammer
              </Text>
            </Fit>
          </Layout>

          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fit>
              <Web />
            </Fit>
            <Fit>
              <Text fill bold textSize="2em" textColor="tertiary">
                www.gregorykapfhammer.com
              </Text>
            </Fit>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide } */}
        <Slide margin={-10} transitionDuration={0} transition={['slide']} bgColor="primary">

          <Layout>
            <BottomPaddedFill>
              <Text bold fit textColor="darktext">
                Hello! It's Great to Meet You!
              </Text>
            </BottomPaddedFill>
          </Layout>
          <Layout>
            <Fill>
              <Text bold fit caps textColor="secondary">
                Madelyn M. Kapfhammer
              </Text>
            </Fill>
          </Layout>

          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fit>
              <Twitter />
            </Fit>
            <Fit>
              <Text fill bold textSize="2em" textColor="tertiary">
                @MaddyKapfhammer
              </Text>
            </Fit>
          </Layout>

          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fit>
              <Web />
            </Fit>
            <Fit>
              <Text fill bold textSize="2em" textColor="tertiary">
                www.madelynkapfhammer.com
              </Text>
            </Fit>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Why Care About a Text Editor?
          </Heading>

          <Layout>
            <Text height={standardHorizontalPadding * .25}>
              &nbsp;
            </Text>
          </Layout>

          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary" margin={.5*standardMargin}>
                Developer Productivity
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary" margin={.5*standardMargin}>
                Programming Fun
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary" margin={.5*standardMargin}>
                Effective Code
              </Heading>
            </Fill>
          </Layout>

          <Layout>
            <Text height={standardHorizontalPadding * .25}>
              &nbsp;
            </Text>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Layout>
            <Fill>
              <Heading fill bold caps size={1} lineHeight={1.1} textColor="darktext">
                VS Code
          </Heading>
            </Fill>
            <Fill>
              <Heading fill bold caps size={1} lineHeight={1.1} textColor="darktext">
                Vim
          </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Backpack size={400} mood="blissful" color="#4DB6AC" />
            </Fill>
            <Fill>
              <Cat size={400} mood="blissful" color="#FF8A65" />
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Layout>
            <Fit>
              <Heading fill bold caps size={1} lineHeight={1.1} textColor="tertiary">
                A Fast Paced Field
          </Heading>
            </Fit>
            <Fit>
              <Fast />
            </Fit>
          </Layout>

        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit size={3} textColor="secondary">
            Key Goals
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding * .25}>
              &nbsp;
            </Text>
          </Layout>
          <List bold textColor={darktext} textAlign="left" textSize="2em" margin={minimalHorizontalPadding} start={1}>
            <ListItem margin={minimalHorizontalPadding}>Showcase noteworthy features</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Compare and contrast text editors</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Highlight less available information</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Share the thrill of customization</ListItem>
          </List>
        </Slide>
        {/* Slide } */}

        {/* Slide } */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Evaluation Metrics
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding * .5}>
              &nbsp;
            </Text>
          </Layout>
          <Heading size={2} textColor="tertiary">
            Ease of ...
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding * .25}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary">
                Installation
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary">
                Use
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary">
                Customization
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Heading fill size={1} textColor="secondary">Learn Key Editor Features</Heading>
            </Fill>
          </Layout>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Heading size={4} textColor="tertiary">
              Learn the basics before you copy confusing configurations
            </Heading>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Heading fill size={1} textColor="secondary">Install Useful Text Editor Plugins</Heading>
            </Fill>
          </Layout>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Heading size={4} textColor="tertiary">
              Discover new plugins and update them on a regular basis
            </Heading>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading fit textColor="secondary">
            The Basics
          </Heading>
          <Heading size={4} textColor="tertiary">
            Visual Studio Code
          </Heading>
          <Layout>
            <Fill>
              <List bold textColor={darktext} textAlign="left" textSize="2em" start={1}>
                <ListItem margin={minimalHorizontalPadding}>Open Command Palette: Ctrl+Shift+P</ListItem>
                <ListItem margin={minimalHorizontalPadding}>IntelliSense: Uses Language Server Protocol</ListItem>
                <ListItem margin={minimalHorizontalPadding}>Save configuration in the User Settings</ListItem>
                <ListItem margin={minimalHorizontalPadding}>Remember to download the Python Extension</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Enable Black Code Formatting</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.BlackFormatting} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fill size={3} textColor="darktext">Enable Tab Completion</Heading>
          <Layout>
            <Text height={.5*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.TabCompletion} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={4} textColor="darktext">Enable Flake8 Code Linting</Heading>
          <Layout>
            <Text height={.25*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.Linting} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading fit textColor="secondary">
            The Basics
          </Heading>
          <Heading size={4} textColor="tertiary">
            Neovim
          </Heading>
          <Layout>
            <Fill>
              <List bold textColor={darktext} textAlign="left" textSize="2em" start={1}>
                <ListItem margin={minimalHorizontalPadding}>Vim or Neovim in a terminal with tmux</ListItem>
                <ListItem margin={minimalHorizontalPadding}>Configure editor through .vimrc or init.vim</ListItem>
                <ListItem margin={minimalHorizontalPadding}>Install plugins with a plugin manager</ListItem>
                <ListItem margin={minimalHorizontalPadding}>Add configuration options for plugins</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={2} textColor="darktext">Overview of Neovim's Configuration File</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.VimBasics} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading fit textColor="secondary">
            Development Tools
          </Heading>
          <Heading size={4} textColor="tertiary">
            Useful in both VS Code and Neovim
          </Heading>
          <Layout>
            <Fill>
              <List bold textColor={darktext} textAlign="left" textSize="2em" start={1}>
                <ListItem margin={minimalHorizontalPadding}>pyenv: Download and manage Python versions</ListItem>
                <ListItem margin={minimalHorizontalPadding}>pipenv: Application deps and virtualenvs</ListItem>
                <ListItem margin={minimalHorizontalPadding}>pytest: Run test cases and report their status</ListItem>
                <ListItem margin={minimalHorizontalPadding}>coverage: Track statements and branches</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={3} textColor="darktext">
            Editor Configuration and Plugin Installation
          </Heading>
          <Layout>
            <Fill>
              <Backpack size={400} mood="lovestruck" color="#4DB6AC" />
            </Fill>
            <Fill>
              <Cat size={400} mood="shocked" color="#FF8A65" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold caps size={15} lineHeight={5.1} textColor="darktext">
                Both support projects and offer many plugins, but VS Code is
                easier to configure
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading fit textColor="secondary">
            GatorGrader
          </Heading>
          <Heading size={4} textColor="tertiary">
            Open-source tool to check the work of writers and programmers
          </Heading>
          <Layout>
            <Fill>
              <List bold textColor={darktext} textAlign="left" textSize="1em" start={1}>
                <ListItem margin={minimalHorizontalPadding}>On GitHub at GatorEducator/gatorgrader</ListItem>
                <ListItem margin={minimalHorizontalPadding}>pipenv shell: Enter a virtual environment</ListItem>
                <ListItem margin={minimalHorizontalPadding}>pipenv run test: Run the test suite</ListItem>
                <ListItem margin={minimalHorizontalPadding}>pipenv run cover: Check for full coverage</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">Install the</Text>
              <Text bold fit size={1} textColor="tertiary">Application Dependencies</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Install Application Dependencies</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.InstallDeps} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">Start Your</Text>
              <Text bold fit size={1} textColor="tertiary">Virtual Environment</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Selecting a Virtual Environment</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.VirtualEnvironment} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Start Project in a Virtual Environment</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.StartProject} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={3} textColor="darktext">
            Virtual Environments and Package Installation
          </Heading>
          <Layout>
            <Fill>
              <Backpack size={400} mood="lovestruck" color="#4DB6AC" />
            </Fill>
            <Fill>
              <Cat size={400} mood="blissful" color="#FF8A65" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold caps size={15} lineHeight={5.1} textColor="darktext">
                Both effectively use pipenv to manage virtualenvs and app dependencies
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">Let's Start</Text>
              <Text bold fit size={1} textColor="tertiary">Programming in Python!</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">Calculate Test</Text>
              <Text bold fit size={1} textColor="secondary">Suite Coverage</Text>
              <Layout>
                <Text height={minimalHorizontalPadding}>
                  &nbsp;
                </Text>
              </Layout>
              <Text bold fit size={4} textColor="tertiary">Work on an existing code base</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Terminal command: pipenv run cover</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.Coverage} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide>
          <Layout>
            <Fill>
              <Heading margin={standardMargin*6} size={1}><Coverage/></Heading>
            </Fill>
            <Fill>
              <Text fill bold textSize="2.5em" textColor="secondary" textAlign="right">99% total coverage</Text>
              <Text height={5*minimalHorizontalPadding}>
                &nbsp;
              </Text>
              <Text fill bold textSize="2.5em" textColor="secondary" textAlign="right">98% coverage test_util.py</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">Wait, I thought</Text>
              <Text bold fit size={1} textColor="secondary">coverage was 100%?</Text>
              <Layout>
                <Text height={minimalHorizontalPadding}>
                  &nbsp;
                </Text>
              </Layout>
              <Text bold fit size={4} textColor="tertiary">My dad: "It is 100%! Wait, what?"</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={2} textColor="darktext">Fuzzy File Finding for the Test</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.FuzzyFile} />
        </Slide>
        {/* Slide } */}


        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Heading margin={standardMargin * 3} size={1}><QuestionMark /></Heading>
            </Fill>
          </Layout>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Fill>
              <Heading fit size={1} textColor="tertiary">What's the Problem?</Heading>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Hardcoded Test Variable</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.Hardcoded} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">Let's Fix the Test!</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="tertiary">Use Pytest's tmpdir test fixture</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={5000} transition={['slide']}>
          <Heading fill size={3} textColor="darktext">Use Pytest's tmpdir fixture</Heading>
          <Layout>
            <Text height={.25*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.FixHardcode} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">Wait, this fix</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">is still incomplete!</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={5000} transition={['slide']}>
          <Heading fit size={1} textColor="darktext">View and Act on Flake8 Warning</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.AddTmpdir}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={3} textColor="darktext">
            Automated Code Linting
            </Heading>
          <Layout>
            <Fill>
              <Backpack size={400} mood="lovestruck" color="#4DB6AC" />
            </Fill>
            <Fill>
              <Cat size={400} mood="blissful" color="#FF8A65" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold caps size={15} lineHeight={5.1} textColor="darktext">
                Both allow multiple background linters, with customization differences
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={2} textColor="darktext">
            Code Autocompletion
            </Heading>
          <Layout>
            <Fill>
              <Backpack size={400} mood="lovestruck" color="#4DB6AC" />
            </Fill>
            <Fill>
              <Cat size={400} mood="blissful" color="#FF8A65" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold caps size={15} lineHeight={5.1} textColor="darktext">
                Both editors offer support, with trade-offs in relevance and performance
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={2} textColor="darktext">Source Code Formatting</Heading>
          <Layout>
            <Text height={.5*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.CodeFormatting} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={2} textColor="darktext">
            Code Formatting
            </Heading>
          <Layout>
            <Fill>
              <Backpack size={400} mood="lovestruck" color="#4DB6AC" />
            </Fill>
            <Fill>
              <Cat size={400} mood="shocked" color="#FF8A65" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold caps size={15} lineHeight={5.1} textColor="darktext">
                Both editors can leverage Black, but VS Code is much easier to configure
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">Run Test Suites</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="tertiary">Did we fix the hard-coded test?</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fill size={3} textColor="darktext">Python Test Explorer</Heading>
          <Layout>
            <Text height={.25*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.FailedTest} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Heading size={3} textColor="darktext">Convert tmpdir to a String</Heading>
          <Layout>
            <Text height={.25*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.FailedTest} />
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading size={3} textColor="darktext">Run the Test Suite</Heading>
          <Layout>
            <Text height={.25*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.RerunTests}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Check Test Suite Coverage</Heading>
          <Layout>
            <Text height={.5*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.RerunCoverage}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Check Test Suite Coverage</Heading>
          <Layout>
            <Text height={.5*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.RunTestsVim}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide>
          <Layout>
            <Fill>
              <Heading margin={standardMargin * 4.5} size={2}><Coverage /></Heading>
            </Fill>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
            <Fill>
              <Text fill bold textSize="4em" textColor="secondary">100% total coverage</Text>
              <Text height={minimalHorizontalPadding}>
                &nbsp;
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={2} textColor="darktext">
            Automated Testing
            </Heading>
          <Layout>
            <Fill>
              <Backpack size={400} mood="excited" color="#4DB6AC" />
            </Fill>
            <Fill>
              <Cat size={400} mood="excited" color="#FF8A65" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold caps size={15} lineHeight={5.1} textColor="darktext">
                Both support testing well, but offer a very different user experience
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={3} textColor="darktext">
            Source Code Highlighting
            </Heading>
          <Layout>
            <Fill>
              <Backpack size={400} mood="blissful" color="#4DB6AC" />
            </Fill>
            <Fill>
              <Cat size={400} mood="shocked" color="#FF8A65" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold caps size={15} lineHeight={5.1} textColor="darktext">
                Both support fast syntax highlighting, but Vim requires an extra package
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="secondary">Text Snippets</Text>
            </Fill>
          </Layout>
          <Layout>
            <Text height={.5*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="tertiary">Save time by using a template for text</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text bold fit size={1} textColor="tertiary">Autocompletion trigger inserts text</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={2} textColor="darktext">
            Snippet Expansion
          </Heading>
          <Layout>
            <Text height={.5*minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Fill>
              <Backpack size={400} mood="shocked" color="#4DB6AC" />
            </Fill>
            <Fill>
              <Cat size={400} mood="lovestruck" color="#FF8A65" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold caps size={15} lineHeight={5.1} textColor="darktext">
                Both editors support snippets, but Vim works well in more scenarios
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* SECTION: Conclusion { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Heading size={1} textColor="secondary">
                Try multiple editors!
              </Heading>
              <Text height={standardHorizontalPadding * .25}>
                &nbsp;
              </Text>
              <Heading size={1} textColor="tertiary">
                Which one did you like best? Why?
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit size={3} textColor="secondary">
            Learning Opportunities
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding * .25}>
              &nbsp;
            </Text>
          </Layout>
          <List bold textColor={darktext} textAlign="left" textSize="2em" margin={minimalHorizontalPadding} start={1}>
            <ListItem margin={minimalHorizontalPadding}>Editing Documentation in Markdown</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Integration with Git and GitHub</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Automated source code refactoring</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Adding and removing dependencies</ListItem>
            <ListItem margin={minimalHorizontalPadding}>Releasing a Python application to PyPI</ListItem>
          </List>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide align="center center" bgColor="primary">
          <Heading fit bold caps size={6} textColor="secondary">
            Want More?
          </Heading>
          <Text fill bold textSize="1.7em" textColor="darktext">
            100 likes for a FREE blog post!
          </Text>
          <Layout>
            <Text height={standardHorizontalPadding * .25}>
              &nbsp;
            </Text>
          </Layout>
          <Text fill bold textSize="1.7em" textColor="darktext">
            On all things VS Code and Vim ...
          </Text>
          <Text fill bold textSize="1.7em" textColor="darktext">
            ... and what it's like to
          </Text>
          <Text fill bold textSize="1.7em" textColor="darktext">
            work as a "Father Daughter Duo"!
          </Text>
          <Layout>
            <Text height={standardHorizontalPadding * .25}>
              &nbsp;
            </Text>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold textSize="2em" textColor="tertiary">
                @GregKapfhammer
              </Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold textSize="2em" textColor="tertiary">
                @MaddyKapfhammer
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['slide']} align="center center" bgColor="primary">
          <Layout>
            <Fill>
              <Heading margin={standardMargin * 3} size={1}><HeartGiant /></Heading>
              <Heading fit size={1} textColor="secondary">Just 100 Likes</Heading>
              <Text fill bold textColor="darktext">come on, you can do it</Text>
              <Text fill bold textColor="darktext">it's not that hard!</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide align="center center" bgColor="primary">
          <Heading fit bold size={6} textColor="secondary">
            Key Points
          </Heading>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Text fill bold textSize="1.5em" textColor="darktext">
            Two awesome text editors and
          </Text>
          <Text fill bold textSize="1.5em" textColor="darktext">
            a great learning experience!
          </Text>
          <Layout>
            <Text height={standardHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Text fill bold textSize="1.7em" textColor="darktext">
            Remember ... 100 likes for a blog post!
          </Text>
          <Layout>
            <Fill>
              <Text fill bold textSize="2em" textColor="tertiary">
                @GregKapfhammer
              </Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text fill bold textSize="2em" textColor="tertiary">
                @MaddyKapfhammer
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

      </Deck>
    );
  }
}
