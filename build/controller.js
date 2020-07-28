"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cat = exports.dog = exports.home = void 0;

var home = function home(req, res) {
  return res.render("home", {
    pageTitle: "home"
  });
};

exports.home = home;

var dog = function dog(req, res) {
  return res.render("dog", {
    pageTitle: "dog"
  });
};

exports.dog = dog;

var cat = function cat(req, res) {
  return res.render("cat", {
    pageTitle: "cat"
  });
};

exports.cat = cat;