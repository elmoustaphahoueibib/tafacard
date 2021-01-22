#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");

const y = chalk.yellow;
const g = chalk.green;
const c = chalk.cyan;
const b = chalk.bold;

const cardOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "blue"
};

const content = `                  ${b("Houeibib Elmoustapha, Proud Auth0 Ambassador ")}

${g("Job")}                Junior Fullstack Java Developer @ RimRis

${g("Twitter")}            ${y("https://twitter.com/Tafa07734418")}
${g("GitHub")}             ${y("https://github.com/elmoustaphahoueibib")}
${g("Website")}            ${y("http://ehoueibib.me")}
${g("LinkedIn")}           ${y("https://linkedin.com/in/ehoueibib/")}

                    ${b("Projects")}

${g("Personal Portfolio")}    ${y("http://ehoueibib.me")}
${g("Marsa Tech Comming Soon")}     ${y("http://marsatech.herokuapp.com")}`;

const slidesContent = ``;

const card = boxen(content, cardOptions);

console.log(card);