import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      "id": 1,
      "name": "Python In A Nutshell",
      "genre": "Python",
      "desc": "This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.",
      "cover": "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg",
      "authors": [
        {
          "first_name": "Alex",
          "last_name": "Martelli",
          "bio": "Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He's a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Göteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex's proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.",
          "author_image": "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg"
        },
        {
          "first_name": "Anna",
          "last_name": "Ravenscroft",
          "bio": "Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.",
          "author_image": "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg"
        },
        {
          "first_name": "Steve",
          "last_name": "Holden",
          "bio": "steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of \"Python Web Programming\", the O'Reilly School of Technology's \"Certificate series in Python\" and O'Reilly Media's \"Intermediate Python\" video series.",
          "author_image": "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg"
        }
      ]
    }]
  }
});
