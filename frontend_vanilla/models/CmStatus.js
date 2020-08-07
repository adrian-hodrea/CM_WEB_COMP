class CmStatus {
    constructor (cmStatus) {
        this.statName = cmStatus.statName;
        this.activeFlag = cmStatus.activeFlag;
        this.ord = cmStatus.ord;
    }

    static getAllCmStatuses(apiUrl) {
        return fetch(apiUrl,{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
    }

    adaugaCmStatusInBD (apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},   
            body: JSON.stringify(self)
        });
    };

    stergeCmStatusDinBD (apiUrl) {
        const self = this;
        return fetch (apiUrl, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(self)  
        })
    }

    modificaCmStatusInBD (apiUrl) {
        const self = this;
        return fetch(apiUrl, {
            method: "PUT",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(self)  
        })
    }


};

export { CmStatus };