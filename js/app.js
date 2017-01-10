var QuestionsMock =
    [{
      question: "a proposito di Capelli",
      answer: [
        { text: "naturali anche bianchi" , value: 2},
        { text: "hennè con riccio naturale", value: 5}
      ]
    },
    { question: "A suo tempo, nella vicenda relativa ai Marò, per chi tifavi",
      answer: [
        {text: "Marò", value: 0},
        {text: "India", value: 1}
      ]
    }];

var Quiz = new Vue({
  el: '#answers',
  data: {
    value: 0,
    items: QuestionsMock
  },
  methods: {
    selectAnswer: function () {
      this.value = 2;
      console.log(QuestionsMock);
    },
  }
})

var result = new Vue({
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
