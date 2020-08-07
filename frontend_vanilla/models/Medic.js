
class Medic {
    constructor(medicData) {
        this.nume = medicData.nume;
        this.prenume = medicData.prenume;
        this.id = medicData.cnp;
    }

    static getAllMedici(apiUrl) {
        return fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
    }

    adaugaMedicInBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        })
    }

    stergeMedicDinBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        })
    }

    modificaMedicInBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        })
    }

}

export { Medic };