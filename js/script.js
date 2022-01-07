const app = new Vue(
  {
    el: '#app',
    data: {
      // parto dallo 0 così quando apro la pagina parto dal primo elemento del mio array (Michele)
      counter: 0,
      nameFilter: '',
      newMex: '',
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
              dropMenu: false
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Ricordati di dargli da mangiare",
              status: "sent",
              dropMenu: false
            },
            {
              date: "10/01/2020 16:15:22",
              text: "Tutto fatto!",
              status: "received",
              dropMenu: false
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
              dropMenu: false
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
              dropMenu: false
            },
            {
              date: "20/03/2020 16:35:00",
              text: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
              dropMenu: false
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
              dropMenu: false
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
              dropMenu: false
            },
            {
              date: "28/03/2020 16:15:22",
              text: "Ah scusa!",
              status: "received",
              dropMenu: false
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
              dropMenu: false
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
              dropMenu: false
            },
          ],
        },
      ]
    },
    methods: {
      clicked: function (index) {
        // stabilisco un counter che rendo uguale all'index, in modo da far combaciare il mio user con una variabile counter
        // console.log('index', index);
        this.counter = index;
        // console.log(this.counter);
      },
      addMessage: function (index) {
        dayjs.extend(window.dayjs_plugin_customParseFormat);
        let data = dayjs().format("D/M/YYYY HH:mm:ss");
        if (this.newMex.trim().length != 0) {
          newMex = {
            date: data,
            text: this.newMex,
            status: "received",
            dropMenu: false
          }
          this.contacts[index].messages.push(newMex);
          this.newMex = ''; 
        }  
        // inserisco il timer
        setTimeout(() => {
          newMex = {
            date: data,
            text: 'ok.',
            status: "sent",
            dropMenu: false
          }
          this.contacts[index].messages.push(newMex);
          this.newMex = ''; 
        }, 1000);
      },
      searching: function () {
        // giro su tutti i contacts
        this.contacts.forEach(element => {
          // se il v-model corrisponde al nome allora visible è true
          if (element.name.toLowerCase().includes(this.nameFilter.toLowerCase())) {
            element.visible = true;
          } else {
            element.visible = false;
          }
        });
      },
      dropdownMenu: function () {
        // this.dropMenu = !this.dropMenu;
        // questa funzione la metto direttamente nel click dell'icona per facilitare tutto
      },
      deleteMessage: function (index) {
        this.contacts[this.counter].messages.splice(index, 1);
        // console.log(this.contacts[this.counter].messages[index]);
      }
    },
    created() {
      //   // creo un array in cui puscio tutti i nomi
      // let names = [];
      // for (let index = 0; index < this.contacts.length; index++) {
      //   const element = this.contacts[index];
      //   // console.log(element);
      //   let arrayElement = element.name;
      //   // console.log(arrayElement);
      //   newName = arrayElement.split("")
      //   // console.log(newName);
      //   names.push(newName);
      // }
      // console.log(names);
      // if (this.nameFilter.trim().length != 0) {
      //   nameFilter = this.nameFilter
      //   this.contacts[index].messages.push(nameFilter);
      //   this.nameFilter = ''; 
      // }  
    }
  }
)






// associando counter ed index, se questi corrispondono allora aggiungo la mia classe clicked per mantenerli colorati di grigio 

