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
    const response = galacticAge.checkType();
    $('#response').append(`<p>${response}</p>`);
  });
})