const app = new Vue(
  {
    el: '#app',
    data: {
      // parto dallo 0 così quando apro la pagina parto dal primo elemento del mio array (Michele)
      counter: 0,
      newText: '',
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              text: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              text: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
      
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              text: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              text: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ]
    },
    methods: {
      clicked: function (index) {
        // stabilisco un counter che rendo uguale all'index, in modo da far combaciare il mio user con una variabile counter
        console.log('index', index);
        this.counter = index;
        console.log(this.counter);
      },
      addMessage: function (index) {
        if (this.newText.trim().length != 0) {
          newText = {
            date: "10/01/2020 15:30:55",
            text: this.newText,
            status: "received",
          }
          this.contacts[index].messages.push(newText);
          this.newText = ''; 
        }  
      },
      // inserisco il timer
      addTalkBack: function (index) {
        setTimeout(() => {
          newText = {
            date: "10/01/2020 15:30:55",
            text: 'ok.',
            status: "sent",
          }
          this.contacts[index].messages.push(newText);
          this.newText = ''; 
        }, 1000);
      }
    },
    created() {
      // console.log(this.visible);
      // this.counter = 0;
      // console.log(this.contacts[index].messages);
    }
  }
)

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


// associando counter ed index, se questi corrispondono allora aggiungo la mia classe clicked per mantenerli colorati di grigio 

