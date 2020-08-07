class ContractCas {
    constructor(contractCas) {
        this.casFk = contractCas.casFk;
        this.persFk = contractCas.persFk;
        this.nrCtr = contractCas.nrCtr;
        this.dataSemnarii = contractCas.dataSemnarii;
        this.dataInceput = contractCas.dataInceput;
        this.dataSfarsit = contractCas.dataSfarsit;
    }

    static getAllContracteCas(apiUrl) {
        return fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
    }

    adaugaContractCasInBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        });
    };

    stergeContractCasDinBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        })
    }

    modificaContractCasInBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        })
    }

};

export { ContractCas };