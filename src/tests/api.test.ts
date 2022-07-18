import server from "../server";
import request from "supertest";


describe('Testing API endpoints',()=>{
    it("GET users", async () => {
        const result = await request(server).get("/users");
        expect(result.statusCode).toEqual(200);
      });
    
});
