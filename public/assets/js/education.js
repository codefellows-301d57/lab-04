'use strict';
/*global htmlSetter */

const edHistoryArr = [];

const EdHistory = function(name, date, description) {
  this.name = name;
  this.date = date;
  this.description = description;
  edHistoryArr.push(this);
};

EdHistory.prototype.renderHTML = function(tempId, tempClass) {
  htmlSetter(tempId, tempClass, edHistoryArr);
  console.log(edHistoryArr);
}

EdHistory.getHistoryFromFile = fileName => {
  const filePath = `${fileName}`;
  const fileType = 'json';
  $.get(filePath, fileType).then(historyJSON => {
    historyJSON.forEach(perHistory => {
      new EdHistory(perHistory.name, perHistory.date, perHistory.description);
    });

    edHistoryArr.forEach(perHistory => perHistory.renderHTML('#history-template', '.ed-placeholder'));
  });
};

EdHistory.getHistoryFromFile('assets/data/education-history.json');
