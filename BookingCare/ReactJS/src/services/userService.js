import axios from '../axios'

const handleLoginApi = (email, password) => {
  return axios.post('/api/login', {email, password})
}

const getAllUsers = (inputId) => {
  //template string
  return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
  console.log('check data from service: ', data)
  return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
  // return axios.delete('/api/delete-user', {id: userId})
  return axios.delete('/api/delete-user', {
    data: {
      id: userId
    }
  })
}

const editUserService = (inputData) => {
  return axios.put('/api/edit-user', inputData)
}

const getAllCodeService = (inputype) => {
  return axios.get(`/api/allcode?type=${inputype}`)
}

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
  return axios.get(`/api/top-all-doctors`)
}

const saveDetailDoctorService = (data) => {
  return axios.post('/api/save-infor-doctors', data)

}

const getDetailInfoDoctor = (inputId) => {
  return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)

}

export { handleLoginApi, getAllUsers,
  deleteUserService, editUserService,
  createNewUserService, getAllCodeService, getTopDoctorHomeService,
  getAllDoctors,saveDetailDoctorService,
  getDetailInfoDoctor,
}