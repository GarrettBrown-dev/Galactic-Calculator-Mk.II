import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge } from './js/calc.js';

$(document).ready(function () {
  $('#age-check-form').submit(function (event) {
    event.preventDefault();
    const age = parseInt($('#age').val());
    const galacticAge = new GalacticAge(age);
    const ageResponse = galacticAge.planetYears(planet);
    $('#ageResponse').append(`<p>${ageResponse}</p>`);
  });

  $('#life-check-form').submit(function (event) {
    event.preventDefault();
    const age = parseInt($('#age').val());
    const galacticAge = new GalacticAge(age);
    const lifeResponse = galacticAge.lifeExpectancy(planet);
    $('lifeResponse').append(`<p>${lifeResponse}</p>`);
  });
});