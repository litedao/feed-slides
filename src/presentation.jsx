// Import React
import React from 'react';
import web3 from './web3'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Magic,
  Layout,
  Fill,
} from 'spectacle';

import Slide1 from './slide1'
import PriceComparison from './pricecomparison'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: 'white',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
          <Slide bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="secondary">
              Maker Feeds!
            </Heading>
            <Text margin="100px 0 0" textColor="tertiary" size={1} fit bold>
              How <strike>we</strike> I? run our oracles
            </Text>
            <Text margin="100px 0 0" textColor="tertiary" size={1} fit bold>
              (And what's next)
            </Text>
          </Slide>
          <Slide>
            <Slide1 />
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="tertiary" fit>
              The Medianizer...
            </Heading>
            <List>
              <ListItem>One of our oldest smart contracts</ListItem>
              <ListItem>1 year old 11 days ago</ListItem>
              <ListItem>Guzzles more gas than a Hummer</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="tertiary" fit>
              17 oracles
            </Heading>
            <List>
              <ListItem>14 ETH/USD</ListItem>
              <ListItem>3 MKR/USD</ListItem>
              <ListItem>~25 ETH spent in a year</ListItem>
              <ListItem>Mostly Maker folks, some community members</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="tertiary" fit>
              The Future
            </Heading>
            <List>
              <ListItem>Off-chain signing</ListItem>
              <ListItem>On-chain aggregation</ListItem>
              <ListItem>(It's the latest fad)</ListItem>
              <ListItem>Alex van de Sande Universal Login</ListItem>
            </List>
          </Slide>
          <Slide>
            <List>
              <ListItem>Cheaper oracles</ListItem>
              <ListItem>Higher accuracy</ListItem>
              <ListItem>5 USD VPS</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="secondary" fit>
              Augur's official REP price feed?
            </Heading>
            <Appear>
              <Heading size={2} lineHeight={1} textColor="tertiary" fit>
                Yeah, that's us
              </Heading>
            </Appear>
            <Appear>
              <List>
                <ListItem>Reach out to other projects</ListItem>
                <ListItem>Run their feeds, they run ours</ListItem>
                <ListItem>Decentralize!</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={1} lineHeight={1} textColor="tertiary" fit>
              Thank you :)
            </Heading>
            <Heading size={3} lineHeight={1} textColor="secondary" fit>
              Any questions?
            </Heading>
          </Slide>
      </Deck>
    );
  }
}
