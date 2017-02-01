const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

var OlderCoaster = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'oldercoaster'}, [
        React.createElement('p', {}, 'Two grannies having the time of their life!'),
        React.createElement('p', {}, 'Passengers:'),
        React.createElement('ul', {}, [
          React.createElement('li', {}, 'Agnes'),
          React.createElement('li', {}, 'Muriel')
        ]), // end array: ul content & children
    ]) // end array: div content & children
    ) // end return
  } // end render
}) // end OlderCoaster

var InFrontOfYou = React.createClass({
  render: function() {
    return (
      React.createElement('div', {}, [
        React.createElement('p', {}, 'You shouldn\'t look too far.'),
        React.createElement('p', {}, [
          'Sometimes, the solution is ',
          React.createElement('strong', {}, 'right in front of you.')
        ])
      ]) // end array: div content & children
    ) // end return
  } // end render
}) // end InFrontOfYou

var ButcherShop = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'butcher-shop'}, [
        React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
        React.createElement('ul', {}, BUTCHER_PRODUCTS.map(function(el, i, arr) {
          return React.createElement('li', {}, el)
        })
      ) // end array: ul content & children
      ]) // end array: div content & children
    ) // end return
  } // end render
}) // end ButcherShop

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
