import Backbone from 'backbone';
import Person from './person_model';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: Person,

  parse(data) {
    return data.results;
  }
 
});