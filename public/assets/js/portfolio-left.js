'use strict';
/*global htmlSetter */

const portfolioLeftArr = [];

const PortfolioLeft = function(href1, src1, name) {
  this.href1 = href1;
  this.src1 = src1;
  this.name = name;
  portfolioLeftArr.push(this);
};

PortfolioLeft.prototype.renderHTML = function(tempId, tempClass) {
  htmlSetter(tempId, tempClass, portfolioLeftArr);
}

PortfolioLeft.getPortfolioFromFile = fileName => {
  const filePath = `${fileName}`;
  const fileType = 'json';
  $.get(filePath, fileType).then(portfolioJSON => {
    portfolioJSON.forEach(portfolioHistory => {
      new PortfolioLeft(portfolioHistory.href1, portfolioHistory.src1, portfolioHistory.name);
    });

    portfolioLeftArr.forEach(portfolioHistory => portfolioHistory.renderHTML('#portfolio-template', '.portfolio-left-placeholder'));
  });
};

PortfolioLeft.getPortfolioFromFile('assets/data/portfolio-left.json');
