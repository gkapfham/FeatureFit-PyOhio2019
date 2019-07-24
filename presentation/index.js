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
import Terminal from '../improved_modules/spectacle-terminal';

{/* Load in a modified external plugin */ }
import CodeSlide from '../improved_modules/spectacle-code-slide';

import { Backpack } from 'react-kawaii';
import { Cat } from 'react-kawaii';
import { Planet } from 'react-kawaii';

{/* Use the preloader for the images */ }
import preloader from 'spectacle/lib/utils/preloader';

{/* Import the theme */ }
import createTheme from '../default';

require('normalize.css');

{/* Load all of the images */ }
const images = {
  CreateOrganization: require('../assets/images/CreateOrganization.png'),
  StartingOrganization: require('../assets/images/StartingOrganization.png'),
  GrantAccess: require('../assets/images/GrantAccess.png'),
  CreateRoster: require('../assets/images/CreateRoster.png'),
  StartCreatingAssignments: require('../assets/images/StartCreatingAssignments.png'),
  CreateAssignment: require('../assets/images/CreateAssignment.png'),
  ExampleAssignments: require('../assets/images/ExampleAssignments.png'),
  ClassroomDefect: require('../assets/images/ClassroomDefect.png'),
  SpeakerDeck: require('../assets/images/SpeakerDeck.png'),
  PresentationRepo: require('../assets/images/PresentationRepo.png'),
  GatorGrader: require('../assets/images/GatorGrader.png'),
  BlackFormatting: require('../assets/images/FFBlackFormatting.gif'),
  TabCompletion: require('../assets/images/FFTabComplete.gif'),
  Linting: require('../assets/images/FFLinting.gif'),
};
preloader(images);

{/* Minimal horizontal padding between rows */ }
var minimalHorizontalPadding = 20;

{/* Standard horizontal padding between rows */ }
var standardHorizontalPadding = 40;

{/* Standard all-side margin size */ }
var standardMargin = 40;

{/* Font used for all questions in section slides */ }
var questionFont = 'Roboto Slab';

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

{/* Create a emotion-styled PlainCite without italics */ }
const PlainCite = styled(Cite)`
  font-style: normal;
  margin-left: 30px;
`;

{/* Create a emotion-styled SpacedBlockQuote that breathes */ }
const SpacedQuote = styled(Quote)`
  line-height: 1.1;
`;

{/* Create a emotion-styled UpHeading that shifts up */ }
const UpHeading = styled(Heading)`
  margin-top: -50px;
`;

{/* Create a emotion-styled BigImage that shifts left */ }
const BigImage = styled(Image)`
  max-width: 110%;
  width: 110%;
`;

{/* Create a emotion-styled Fill with padding */ }
const PaddedFill = styled(Fill)`
  margin-right: 110px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */ }
const LeftShiftPaddedFill = styled(Fill)`
  margin-right: 110px;
  // NOTE: comment out next line to get better printing
  margin-left: -100px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */ }
const BigLeftShiftPaddedFill = styled(Fill)`
  margin-right: 110px;
  // NOTE: comment out next line to get better printing
  margin-left: -120px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fill with padding */ }
const BottomPaddedFill = styled(Fill)`
  margin-bottom: 40px;
  justify-content: space-between;
`;

{/* Create a emotion-styled Fit with padding */ }
const PaddedFit = styled(Fit)`
  margin-right: 100px;
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

export const Comments = () => (
  <FontAwesomeIcon icon={['fas', 'comments']} size="2x" transform="down-2, left-5" color={darktext} />
)

export const CommentsShiftUp = () => (
  <FontAwesomeIcon icon={['fas', 'comments']} transform="grow-8, left-2" color={darktext} />
)

export const ListIcon = () => (
  <FontAwesomeIcon icon={['fas', 'list']} transform="grow-18" color={darktext} />
)

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
        <Slide transition={['slide', 'spin']} bgColor="primary">

          <Heading size={1} fit lineHeight={1.2} bold textColor="darktext">
            Finding Your Feature Fit
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
            <Fill>
              <Heading size={2} textColor="secondary" margin={standardMargin}>
                Productivity
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary" margin={standardMargin}>
                Fun
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary" margin={standardMargin}>
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
          <Heading fit textColor="secondary">
            Key Goals
          </Heading>
          <Appear transitionDuration={100}>
            <List bold textColor={darktext} textAlign="left" textSize="2em" margin={minimalHorizontalPadding} start={1}>
              <ListItem margin={minimalHorizontalPadding}>Showcase Key Features</ListItem>
              <ListItem margin={minimalHorizontalPadding}>Compare and Contrast</ListItem>
              <ListItem margin={minimalHorizontalPadding}>Raise Awareness</ListItem>
              <ListItem margin={minimalHorizontalPadding}>Highlight Less Available Information</ListItem>
              <ListItem margin={minimalHorizontalPadding}>Depict the Thrill of Customization</ListItem>
            </List>
          </Appear>
        </Slide>
        {/* Slide } */}

        {/* Slide } */}
        <Slide transition={['']} bgColor="primary">
          <Heading fit textColor="darktext">
            Evaluation Metrics
          </Heading>
          <Heading size={4} textColor="tertiary">
            Ease of
          </Heading>

          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary" margin={standardMargin}>
                Installation
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary" margin={standardMargin}>
                Use
              </Heading>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Heading size={2} textColor="secondary" margin={standardMargin}>
                Customization
              </Heading>
            </Fill>
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
                <ListItem margin={minimalHorizontalPadding}>Configure in User Settings</ListItem>
                <ListItem margin={minimalHorizontalPadding}>IntelliSense: Built-in Language Server Protocol</ListItem>
                <ListItem margin={minimalHorizontalPadding}>Must Download Python Extension</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading fit textColor="secondary">
            The Basics
          </Heading>
          <Heading size={4} textColor="tertiary">
            Vim
          </Heading>
          <Layout>
            <Fill>
              <List bold textColor={darktext} textAlign="left" textSize="2em" start={1}>
                <ListItem margin={minimalHorizontalPadding}>Something Here</ListItem>
                <ListItem margin={minimalHorizontalPadding}>Something Here</ListItem>
                <ListItem margin={minimalHorizontalPadding}>Something Here</ListItem>
                <ListItem margin={minimalHorizontalPadding}>Something Here</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

          <Layout>
            <Fill>
              <Text fit size={1} textColor="secondary">Start Your</Text>
              <Text fit size={1} textColor="secondary">Virtual Environment</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

          <Layout>
            <Fill>
              <Text fit size={1} textColor="secondary">Install Packages</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={3} textColor="darktext">
            Virutal Environments and Installing Packages
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
                Short point about both here and then some other things
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

          <Layout>
            <Fill>
              <Text fit size={1} textColor="secondary">Run Test Suites</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

          <Layout>
            <Fill>
              <Text fit size={1} textColor="secondary">Go to Failed</Text>
              <Text fit size={1} textColor="secondary">Test Suite and Case</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

          <Layout>
            <Fill>
              <Text fit size={1} textColor="secondary">Find Definition of </Text>
              <Text fit size={1} textColor="secondary">Failed Test</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={3} textColor="darktext">
            Automated Testing and Debugging
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
                Short point about both here and then some other things
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

          <Layout>
            <Fill>
              <Text fit size={1} textColor="secondary">Fix Your Bug</Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} align="center center" bgColor="primary">

          <Layout>
            <Fill>
              <Heading fit size={2} textColor="secondary">Autocompletion </Heading>
              <Heading fit size={2} textColor="secondary">Linting and Code Formatting</Heading>
              <Heading fit size={2} textColor="secondary">Source Code Highlighting </Heading>
              <Heading fit size={2} textColor="secondary">Snippets</Heading>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide', 'spin']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Enable Tab Completion</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.TabCompletion}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading textColor="darktext">
            Autocompletion
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
                Short point about both here and then some other things
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionIn={['slide', 'spin']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Enable Black Code Formatting</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.BlackFormatting}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionIn={['slide', 'spin']} transitionOut={['slide']}>
          <Heading fit size={1} textColor="darktext">Enable Flake8 Linting</Heading>
          <Layout>
            <Text height={minimalHorizontalPadding}>
              &nbsp;
            </Text>
          </Layout>
          <Image src={images.Linting}/>
        </Slide>
        {/* Slide } */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={3} textColor="darktext">
            Linting and Code Formatting
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
                Short point about both here and then some other things
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading size={3} textColor="darktext">
            Source Code Highlighting
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
                Short point about both here and then some other things
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* Slide { */}
        <Slide transitionDuration={0} transition={['']} bgColor="primary">
          <Heading textColor="darktext">
            Snippets
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
                Short point about both here and then some other things
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* Slide { */}

        {/* SECTION: Conclusion } */}

        {/* Slide { */}
        <Slide bgColor="primary">
        </Slide>
        {/* Slide } */}

      </Deck>
    );
  }
}
