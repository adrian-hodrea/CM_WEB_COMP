class Cas {
    constructor (cas) {
        this.cui = cas.cui;
        this.denumire = cas.denumire;
        this.adresa = cas.adresa;
        this.iban = cas.iban;
    }

    static getAllCas(apiUrl) {
        return fetch(apiUrl,{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
    }

    adaugaCasInBD (apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},   
            body: JSON.stringify(self)
        });
    };

    stergeCasDinBD (apiUrl) {
        const self = this;
        return fetch (apiUrl, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(self)  
        })
    }

    modificaCasInBD (apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "PUT",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(self)  
        })
    }


};

export { Cas };