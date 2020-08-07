class CodIndemnizatie {
    constructor(codIndemnizatie) {
        this.codIndemnizatie = codIndemnizatie.codIndemnizatie;
        this.descriereIndemnizatie = codIndemnizatie.descriereIndemnizatie;
        this.procent = codIndemnizatie.procent;
    }

    static getAllCoduriIndemnizatie(apiUrl) {
        return fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
    }

    adaugaCodIndemnizatieInBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        });
    };

    stergeCodIndemnizatieDinBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        })
    }

    modificaCodIndemnizatieInBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        })
    }

};

export { CodIndemnizatie };