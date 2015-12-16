import Backbone from 'backbone';
import $ from 'jquery';

import {
  People as PeopleCollection, 

  Person,
} from './resources';

import {
  People as PeopleView, 
  Person as PersonView, 
  Spinner,
  newContactTemplate,
} from './views';

export default Backbone.Router.extend({

  routes: {
    ""            : "redirectToPeople",
    "people"      : "showPeople",
    "person/:id"  : "showPerson",
    "newContact"  : "addNew",
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new PeopleCollection();

    this.$el.on('click', '.person-list-item', (event) => {
      let $li = $(event.currentTarget);
      let personId = $li.data('person-id');
      this.navigate(`person/${personId}`, {trigger: true});
    });

    this.$el.on('click', '.backBtn', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', '.newPersonBtn', (event) => {
      this.navigate(`newContact`, {trigger: true});
    });

    this.$el.on('click', '.saveContact', (event) => {
      let newFriend = new Person ({
        Name : $('#name').val(),
        Email: $('#email').val(),
        PhoneNumber: $('#number').val(),
        Location: $('#city').val()
      });

      newFriend.save();
      this.navigate(`people`, {trigger: true});
    });
  },
  
  redirectToPeople() {
    this.navigate('people', {
      replace: true,
      trigger: true
    });
  },

  showPeople() {
    this.showSpinner();

    this.collection.fetch().then(() => {
      this.$el.html(
        PeopleView(
          this.collection.toJSON()
          )
        );
    });
  },  

  showPerson(id) {
    let person = this.collection.get(id);
    if (person) {
      this.$el.html (
        PersonView (
          person.templateData()
          )
        );
    } else {
      this.showSpinner();
      person = this.collection.add({objectId: id});
      person.fetch().then(() => {
        this.$el.html (
          PersonView(
            person.templateData()
            )
          );
      });
    }
  },
  
  addNew() {
    this.showSpinner();
    this.$el.html(newContactTemplate);
  },  

  showSpinner() {
    this.$el.html (Spinner() );
  },

  start() {
    Backbone.history.start();
    return this;
  },
});  

  

    