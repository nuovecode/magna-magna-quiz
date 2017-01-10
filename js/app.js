var response = new Vue({
  el: '#response',
  data: {
    response: 'il tuo profilo'
  },
  methods: {
    displayResponse: function () {
      this.response = 'RISPOSTA';
    }
  }
})

var Quiz = new Vue({
  el: '#list',
  data: {
    value: 0,
    items: [
      {
        question: "a proposito di Capelli",
        response: [
          { text: "naturali anche bianchi" , value: 2},
          { text: "hennè con riccio naturale", value: 5}
        ]
      },
      { question: "A suo tempo, nella vicenda relativa ai Marò, per chi tifavi",
        response: [
          {text: "Marò", value: 0},
          {text: "India", value: 1}
        ]
      },
    ]
  },
  methods: {
    changeProject: function () {
      this.value = 2
      console.log(this.value);
    }
  }
})
