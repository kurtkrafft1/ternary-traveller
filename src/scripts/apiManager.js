const baseUrl = "http://localhost:8088/"
const apiManager = {
    getInterestsData: () => {
      return fetch (`${baseUrl}interests`)
      .then(r=>r.json());
    },
    postInterestData: (entry) => {
      return fetch (`${baseUrl}interests`,{
        method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(entry)
        }).then(r => r.json());
      
    },
    deleteInterestCard: (id) => {
        return fetch (`${baseUrl}interests/${id}`, {
            method: "DELETE"
            
        }).then(r=>r.json());
    }
    }
export default apiManager;