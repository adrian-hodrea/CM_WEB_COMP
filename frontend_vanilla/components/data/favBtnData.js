export let favoritesMenuData = [
  {
    icon: "fas fa-users",
    titlu: "Management Persoane",
    buttons: [
      {
        icon: "fas fa-user-plus",
        titlu: "Adauga Persoana",
        linkToPage: "/frontend/pages/addPerson.html"
      },
      {
        icon: "fas fa-list-ol",
        titlu: "Lista Persoane",
        linkToPage: "/frontend/pages/displayPersons.html"
      },
      {
        icon: "fas fa-child",
        titlu: "Adauga Copil",
        linkToPage: "/frontend/pages/addChild.html"
      },
      {
        icon: "fas fa-list-ol",
        titlu: "Lista Copii",
        linkToPage: "/frontend/pages/displayChildren.html"
      }
    ]
  },

  {
    icon: "fas fa-file-invoice",
    titlu: "Management Concedii Medicale",
    buttons: [
      {
        icon: "fas fa-file-invoice",
        titlu: "Adauga Concediu Medical",
        linkToPage: "/frontend/pages/addConcediuMedical.html"
      },
      {
        icon: "fas fa-list-ol",
        titlu: "Lista Concedii Medicale",
        linkToPage: "/frontend/pages/displayConcediiMedicale.html"
      },
      {
        icon: "fas fa-sort-numeric-down",
        titlu: "Adauga Cod Indemnizatie",
        linkToPage: "/frontend/pages/addCodIndemnizatie.html"
      },
      {
        icon: "fas fa-list-ol",
        titlu: "Lista Coduri Indemnizatie",
        linkToPage: "/frontend/pages/displayCoduriIndemnizatie.html"
      },
      {
        icon: "fas fa-spinner",
        titlu: "Adauga Status CM",
        linkToPage: "/frontend/pages/addCmStatus.html"
      },
      {
        icon: "fas fa-list-ol",
        titlu: "Lista Statusuri CM",
        linkToPage: "/frontend/pages/displayCmStatuses.html"
      },



    ]
  },

  {
    icon: "fas fa-hospital",
    titlu: "Management Case de Sanatate",
    buttons: [
      {
        icon: "fas fa-clinic-medical",
        titlu: "Adauga Casa de Sanatate",
        linkToPage: "/frontend/pages/addCas.html"
      },
      {
        icon: "fas fa-list-ol",
        titlu: "Lista Case de Sanatate",
        linkToPage: "/frontend/pages/displayCas.html"
      },
      {
        icon: "fas fa-file-invoice",
        titlu: "Adauga Contract CAS",
        linkToPage: "/frontend/pages/addContractCas.html"
      },
      {
        icon: "fas fa-list-ol",
        titlu: "Lista Contracte CAS",
        linkToPage: "/frontend/pages/displayContracteCas.html"
      }
    ]
  },

  {
    icon: "fas fa-stethoscope",
    titlu: "Management Medici",
    buttons: [
      {
        icon: "fas fa-user-md",
        titlu: "Adauga Medic",
        linkToPage: "/frontend/pages/addMedic.html"
      },
      {
        icon: "fas fa-list-ol",
        titlu: "Lista Medici",
        linkToPage: "/frontend/pages/displayMedici.html"
      }
    ]
  }

]
