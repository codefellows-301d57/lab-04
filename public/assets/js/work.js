'use strict';
/*global htmlSetter */

const workHistoryArr = [];

const WorkHistory = function(name, date, description) {
  this.name = name;
  this.date = date;
  this.description = description;
  workHistoryArr.push(this);
};

WorkHistory.prototype.renderHTML = function(tempId, tempClass) {
  htmlSetter(tempId, tempClass, workHistoryArr);
  console.log(workHistoryArr);
}

WorkHistory.getHistoryFromFile = fileName => {
  const filePath = `${fileName}`;
  const fileType = 'json';
  $.get(filePath, fileType).then(historyJSON => {
    historyJSON.forEach(perHistory => {
      new WorkHistory(perHistory.name, perHistory.date, perHistory.description);
    });

    workHistoryArr.forEach(perHistory => perHistory.renderHTML('#history-template', '.work-placeholder'));
  });
}

WorkHistory.getHistoryFromFile('assets/data/work-history.json');
