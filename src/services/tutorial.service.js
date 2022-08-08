import http from "../http-common";
import axios from "axios";
var apiii=axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  }
})
class TutorialDataService {
  getAll() {
    console.log("heyyyyy")
    return apiii.get("/tutorials");
  }
  get(id) {
    return http.get(`/tutorials/${id}`);
  }
  create(data) {
    return apiii.post("/tutorials", data);
  }
  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }
  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }
  deleteAll() {
    return http.delete(`/tutorials`);
  }
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
export default new TutorialDataService();