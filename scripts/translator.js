class Translator {
  constructor() {
    this.#initLanguage();
  }

  #initLanguage() {
    this.setLanguage(localStorage.getItem('language') || 'ro');
  }

  setLanguage = language => {
    localStorage.setItem('language', language);
    this.language = language;
    this.translate();
  };

  translate() {
    const fields = [...document.querySelectorAll('[translateid]')];
    const regex = /([A-Za-z0-9])\w+/g;
    fields.forEach(field => {
      const target = [...field.childNodes].find(
        node =>
          node.nodeType === Node.TEXT_NODE && node.textContent.match(regex)
      );
      target.textContent =
        this.#translationData[field.getAttribute('translateid')]?.[
          this.language
        ] || 'No content available';
    });
  }

  #translationData = {
    '4ce64fe3-f9e4-4d2d-af63-c0dbbaf58742': {
      en: 'Summary',
      ro: 'Rezumat',
    },
    'aa1f4b1a-9935-4efb-96a8-f3b12c62957e': {
      en: 'Skills',
      ro: 'Abilități',
    },
    'b8a6f34a-520b-4628-85d6-0a89a10ff67f': {
      en: 'Portfolio',
      ro: 'Portofoliu',
    },
    '8b3e0a86-f0a3-47c9-880a-765c422d7884': {
      en: 'Contact',
      ro: 'Contact',
    },
    'visit-btn': {
      en: 'Visit',
      ro: 'Accesează',
    },
    '6da7d905-5ea0-4e93-92ba-e48637805d25': {
      en: 'Resume - Mihai Dragan',
      ro: 'Curriculum Vitae - Mihai Dragan',
    },
    '6cd79852-b38d-4105-a54c-9dfa2a09a3b4': {
      en: `I'm an enthusiastic web developer, always trying out new ideas that would make my work stand out. From just getting the right look to finding the most optimal implementation, the road to getting things done is always an exciting journey.`,
      ro: 'Web developer plin de entuziasm, în permanentă căutare de idei noi ce îmi pot face munca să iasă în evidență. De la obținerea unui design perfect până la găsirea celei mai optime implementări, drumul către reușită este întotdeauna o călătorie memorabilă.',
    },
    'db840334-298f-4389-988c-0ccfa0e4a4c1': {
      en: 'Work Experience',
      ro: 'Experiență profesională',
    },
    'a738073b-07d8-4f0c-80c8-635c4cd52e1f': {
      en: 'Graphic design for signs, corporate identity, stationery, OOH, brand displays.',
      ro: 'Design grafic pentru firme, identitate corporativă, papetărie, OOH, diverse display-uri de brand.',
    },
    'c9158de9-6bab-4d97-9c7b-cdd170a5f876': {
      en: 'Online content management for BMW brand, graphic design.',
      ro: 'Management conținut online pentru brand-ul BMW, design grafic.',
    },
    '6cfb1b0a-ab3a-4adb-b0f6-3fb65ad44cf0': {
      en: 'Front-end website development using HTML, CSS, JavaScript.',
      ro: 'Dezvoltare web front-end folosind HTML, CSS, JavaScript',
    },
    'e0a6195b-c7ed-43a9-bcb7-46a66ef7ec7c': {
      en: 'Front-end website development using HTML, CSS, JavaScript.',
      ro: 'Dezvoltare web front-end folosind HTML, CSS, JavaScript',
    },
    '7c8cfbeb-ef78-4ba6-b24f-a9d7cb0849a5': {
      en: 'Technologies',
      ro: 'Tehnologii',
    },
    'ead4db04-a643-4b9e-8d08-d91defbff914': {
      en: `I'm familiar with`,
      ro: 'Cu care lucrez',
    },
    'fd806c11-7594-4f6a-9f32-a908e7edcc5d': {
      en: 'Tools',
      ro: 'Tool-uri',
    },
    '4568aa3b-660a-435c-a216-7d3d7f65a985': {
      en: 'I use',
      ro: 'Pe care le folosesc',
    },
    '8a9dab6e-f060-4a8e-97f3-e8374f41e0d2': {
      en: 'Portfolio',
      ro: 'Portofoliu',
    },
    '5328b12f-129a-4a5d-8bf9-598a16a90762': {
      en: 'My work',
      ro: 'Proiecte realizate',
    },
    '526d0639-9886-4e09-9caf-aa9f3f2609c8': {
      en: 'Shopping App using ReactJS',
      ro: 'Magazin online cu ReactJS',
    },
    'ad61ee04-dc37-4ab3-8d29-c28edea7f071': {
      en: 'A shopping app using external data, user authentication and shopping cart functionality.',
      ro: 'Magazin online ce foloseste date externe, autentificare de utilizator și functionalitate de coș de cumpărături.',
    },
    '37b30fe4-aac9-444f-b064-6abe9adc764c': {
      en: 'Todo App using a REST API',
      ro: 'Aplicație tip Todo List folosind un REST API',
    },
    'f10422cc-c7a4-478e-ae59-0ca4bf8ce0f6': {
      en: 'A Todo App using a REST API build specifically for this purpose and MongoDB for data storage.',
      ro: 'Aplicație tip Todo List ce folosește un REST API special dezvoltat în acest scop și MongoDB pentru stocare date.',
    },
    'c9473bdf-21c7-4142-bd0a-f1317d4a59d1': {
      en: 'Movie Streaming App layout using HTML and CSS Grid',
      ro: 'Layout pentru o aplicație de streaming filme folosind doar HTML și CSS Grid',
    },
    'cd4b995d-9fa2-45ec-aae5-80d779c0abdc': {
      en: 'Responsive layout similar to popular movie streaming apps using HTML, CSS Grid.',
      ro: 'Layout responsive similar cu layout-ul celor mai populare aplicații de streaming filme, folosind doar HTML și CSS Grid.',
    },
    '7fb134ab-e5f0-4d94-a601-6fa1c027d795': {
      en: 'Rock, Paper, Scissors Game using HTML, CSS and JavaScript',
      ro: 'Jocul Rock, Paper, Scissors folosind HTML, CSS și JavaScript',
    },
    'b3629b8e-4e14-44e6-8a72-9cbfd6d4b919': {
      en: 'Browser game with player vs. player or player vs. computer.',
      ro: 'Joc de browser, cu posibilitatea de a juca player vs. player sau player vs. calculator.',
    },
    '332a3ea0-3745-4b21-8855-765ddc44df91': {
      en: 'Get in touch',
      ro: 'Contactează-mă',
    },
    '8a8a916a-3b79-4df9-8be8-e682ecff1163': {
      en: 'To get something awesome done',
      ro: 'Să realizăm ceva cool împreună',
    },
    'b6876220-0b05-499e-b266-6db40d485b74': {
      en: 'Mail',
      ro: 'Email',
    },
    '3ce85149-12c8-4012-91e5-35306c8f7941': {
      en: 'Phone',
      ro: 'Telefon',
    },
    'bca30391-79df-43bc-ab64-e9c9b96b9a77': {
      en: 'Message me',
      ro: 'Trimite-mi un mesaj',
    },
    '35024ca4-e9a9-451b-b820-8a699294cf74': {
      en: 'Your name',
      ro: 'Numele tău',
    },
    'e5b78a2e-4ba7-4edb-930e-2e737e55bac6': {
      en: 'Your email',
      ro: 'Adresa ta de email',
    },
    '9ffe235a-de15-4c8f-afe3-2d8d2a351ddc': {
      en: 'Your message',
      ro: 'Mesajul tău',
    },
    'aa974fac-9a43-4ed2-9eb6-a2192f95a6c7': {
      en: 'Send Message',
      ro: 'Trimite Mesaj',
    },
    'a9080662-a2bd-435b-8ed6-4ded1495df5f': {
      en: 'You can also find me on',
      ro: 'Mă poți găsi și pe',
    },
    // thankyou.html translation
    'ecfa6442-7d74-4ae5-aa60-1f29d6e66dd4': {
      en: 'Resume - Mihai Drăgan - Thank you for your message',
      ro: 'Curriculum Vitae - Mihai Drăgan - Îți mulțumesc pentru mesaj',
    },
    'c2e3b82e-18f1-4e02-8566-ae675bae7c39': {
      en: 'Thank you for your message.',
      ro: 'Îți mulțumesc pentru mesaj.',
    },
    'e421cf95-a139-4ac1-8170-901d84a24e78': {
      en: 'You will be redirected to the main page in ',
      ro: 'Vei fi redirecționat la pagina principală în ',
    },
    '79edb693-1584-4047-ac5d-98021624db85': {
      en: 'Return to Main Page',
      ro: 'Întoarce-te la pagina principală',
    },
  };
}
