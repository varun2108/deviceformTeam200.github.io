(function ($) {
  'use strict';
  var substringMatcher = function (strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      var substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      for (var i = 0; i < strs.length; i++) {
        if (substrRegex.test(strs[i])) {
          matches.push(strs[i]);
        }
      }

      cb(matches);
    };
  };

  var devices = ['Samsung Galaxy S22', 'Google Pixel 7', 'Google Pixel 6a', 'OnePlus 10 Pro', 'Vivo X80 Pro',
    'ASUS ROG Phone 6 Pro', 'Samsung Galaxy Z Fold 4', 'Samsung Galaxy Z Flip 4', 'Oppo Find X5 Pro',
    'Microsoft Surface Duo 2', 'Samsung Galaxy Tab S8 Ultra'
  ];

  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  }, {
    name: 'states',
    source: substringMatcher(devices)
  });
  // constructs the suggestion engine
  var devices = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: devices
  });

  $('#bloodhound .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  }, {
    name: 'devices',
    source: devices
  });
})(jQuery);