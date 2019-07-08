'use strict';
/*global htmlSetter */

const portfolioRightArr = [];

const PortfolioRight = function(href1, src1, name) {
  this.href1 = href1;
  this.src1 = src1;
  this.name = name;
  portfolioRightArr.push(this);
};

PortfolioRight.prototype.renderHTML = function(tempId, tempClass) {
  htmlSetter(tempId, tempClass, portfolioRightArr);
}

PortfolioRight.getPortfolioFromFile = fileName => {
  const filePath = `${fileName}`;
  const fileType = 'json';
  $.get(filePath, fileType).then(portfolioJSON => {
    portfolioJSON.forEach(portfolioHistory => {
      new PortfolioRight(portfolioHistory.href1, portfolioHistory.src1, portfolioHistory.name);
    });

    portfolioRightArr.forEach(portfolioHistory => portfolioHistory.renderHTML('#portfolio-template', '.portfolio-right-placeholder'));
  });
};

PortfolioRight.getPortfolioFromFile('assets/data/portfolio-right.json');
