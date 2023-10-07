import { create } from "apisauce";

const apiClient = create({
    baseURL: "https://rule4be-fc4445b7e11b.herokuapp.com/snapshots/api/v1"
    });

export default apiClient;