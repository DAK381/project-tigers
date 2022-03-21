import axios from '../axios'

const BOOK_API_REST_URL = "http://localhost:8080/admin/allMembers";

class APIService {
    
    getMembers(){
        return axios.get("/admin/allMembers");
    }

    getMembersByFirst(firstName){
        return axios.get('/admin/member/firstname/{memberFirstName}', {
            params:{
                memberFirstName: firstName
            }
        })
    }

}

export default new APIService();