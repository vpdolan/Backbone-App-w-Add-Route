import $ from 'jquery';
import {APP_ID, API_REST_KEY} from './parse_data';

// const APP_ID = 'HOt6uGKtE3KMKJhgzlRQDIntoKNiwhhM8h2buFL9';
// const API_REST_KEY = 'dIcHQTRg1e6MI5AaF2bUkwALpaYsCUxt9sg5l8LN';
  
$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_REST_KEY
  }
});