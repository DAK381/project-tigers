import axios from "../../axiosData";

class MemberService{
    findById(user_id){
        return axios.get(`/admin/member/{user_id} = ${user_id}`)
    }
}