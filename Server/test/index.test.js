const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
const {email, password} = require('../src/utils/users');


describe('Test de RUTAS', () => {

  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1")
        
      expect(body).toHaveProperty("id")
      expect(body).toHaveProperty("name")
      expect(body).toHaveProperty("species")
      expect(body).toHaveProperty("gender")
      expect(body).toHaveProperty("status")
      expect(body).toHaveProperty("origin")
      expect(body).toHaveProperty("image")
    })

    it("Si hay un error responde con status: 500", async () => {
      await agent.get('/rickandmorty/character/800').expect(200)
      await agent.get('/rickandmorty/character/900').expect(500)
    })
  });
  
  describe("GET /rickandmorty/login", () => {
    it('Al hacer login con información correcta se obtiene un access:true', async () => {
      const { body } = await agent.get('/rickandmorty/login?email=juancho644@gmail.com&password=Luciana15');
        expect(body).toEqual({ access: true })
   }) 
    it('Al hacer login con información incorrecta se obtiene un access:false', async () => {
      const { body } = await agent.get('/rickandmorty/login?email=juancho644@gmail.com&password=Luciana17')
        expect(body).toEqual({ access: false })
   }) 
  });

  describe("POST /rickandmorty/fav", () => {

    let char1 = { id: 1, name: 'Rick' }
    let char2 = { id: 2, name: "Morty" };
    it('Al postear un nuevo favorito, debe retornar un nuevo arreglo con el favorito agregado', async () => {
      const res = await agent.post("/rickandmorty/fav").send(char1)
      expect(res.body).toContainEqual(char1)
    })

    it('Al postear otro favorito, debe retornar el arreglo con el favorito agregado anteriormente', async () => {
      const res = await agent.post("/rickandmorty/fav").send(char2)
      expect(res.body).toContainEqual(char1)
      expect(res.body).toContainEqual(char2)
    })
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    let char1 = { id: 1, name: "Rick" };
    let char2 = { id: 2, name: "Morty" };
    
    it('Si el ID enviado no existe, devuelve un array con los personajes sin ningún cambio', async () => {
      const { body } = await agent.delete('/rickandmorty/fav/5');

      expect(body).toContainEqual(char1)
      expect(body).toContainEqual(char2)
    })

    it('Si ID enviado existe, devuelve un array sin el personaje eliminado', async () => {
      const { body } = await agent.delete('/rickandmorty/fav/2');

      expect(body).toContainEqual(char1)
      expect(body).not.toContainEqual(char2)
    })
  });

})