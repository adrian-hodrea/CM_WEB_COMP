class ConcediuMedical {
    constructor(concediuMedical) {
        this.serieCm = concediuMedical.serieCm;
        this.numarCm = concediuMedical.numarCm;
        this.ctrFk = concediuMedical.ctrFk;
        this.persFk = concediuMedical.persFk;
        this.dataAcordarii = concediuMedical.dataAcordarii;
        this.medicFk = concediuMedical.medicFk;
        this.deLaData = concediuMedical.deLaData;
        this.laData = concediuMedical.laData;
        this.tipInitCont = concediuMedical.tipInitCont;
        this.codIndFk = concediuMedical.codIndFk;
        this.cmInitFk = concediuMedical.cmInitFk;
        this.copilFk = concediuMedical.copilFk;
        this.cmStatFk = concediuMedical.cmStatFk;
    }

    static getAllConcediiMedicale(apiUrl) {
        return fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
    }

    adaugaConcediuMedicalInBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        });
    };

    stergeConcediuMedicalDinBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        })
    }

    modificaConcediuMedicalInBD(apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(self)
        })
    }

};

export { ConcediuMedical };