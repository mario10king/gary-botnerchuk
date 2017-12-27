module.exports = {
  '1': {
    options: [['Yes', '3'], ['No', '2']],
    text: 'Hey this is Gary. Do you need advice?'
  },
  '2': {
    options: [['Ok I need advice now', '3']],
    text: 'Then stop messing around and get to work'
  },
  '3': {
    options: [["I'm scared of failure", '4'], ['I need more customers', '5']],
    text: 'What type of advice'
  },
  '4': { options: [], text: "You're going to die", nextState: '6' },
  '5': {
    options: [],
    text:
      'Use instagram to find influencers in your market and reach out to them. Most wont reply but you just have to keep on going.',
    nextState: '6'
  },
  '6': {
    options: [['Yes', '3'], ['No', '7']],
    text: 'Do you need any more advice'
  },
  '7': {
    options: [['I need more advice', '3']],
    text: 'Ok then get out there and hustle!'
  }
};
