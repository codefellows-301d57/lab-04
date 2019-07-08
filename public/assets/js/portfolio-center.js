'use strict';
/*global htmlSetter */

const portfolioCenterArr = [];

const PortfolioCenter = function(href1, src1, name) {
  this.href1 = href1;
  this.src1 = src1;
  this.name = name;
  portfolioCenterArr.push(this);
};

PortfolioCenter.prototype.renderHTML = function(tempId, tempClass) {
  htmlSetter(tempId, tempClass, portfolioCenterArr);
}

PortfolioCenter.getPortfolioFromFile = fileName => {
  const filePath = `${fileName}`;
  const fileType = 'json';
  $.get(filePath, fileType).then(portfolioJSON => {
    portfolioJSON.forEach(portfolioHistory => {
      new PortfolioCenter(portfolioHistory.href1, portfolioHistory.src1, portfolioHistory.name);
    });

    portfolioCenterArr.forEach(portfolioHistory => portfolioHistory.renderHTML('#portfolio-template', '.portfolio-center-placeholder'));
  });
};

PortfolioCenter.getPortfolioFromFile('assets/data/portfolio-center.json');
