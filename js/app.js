window.App = Em.Application.create();


App.Quote = Em.Object.extend({
  text: null,
  possibleAuthours: [],
  realAuthor: null
});

App.Author = Em.Object.extend({
  firstName: '',
  lastName: '',
  fullName: function() {
     return this.get('firstName') + ' ' + this.get('lastName');
   }.property()
});

App.User = Em.Object.extend({
  firstName: '',
  lastName: '',
  score: 0,
});

App.CurrentUser = App.User.create();

App.authors = [
  App.wale = App.Author.create({
    firstName: "Wale",
  }),

  App.doug = App.Author.create({
    firstName: "Doug",
    lastName: "March"
  })
]


App.AuthorController = Em.ArrayController.create({
  content: App.authors
});

