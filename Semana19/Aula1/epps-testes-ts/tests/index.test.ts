import { connection, isEven, performPurchase } from "../src"
import { User } from "../src/model/types"
//Exercicio 2
describe("performPurchase", () => {

   test("testes de inserção", () => {


      //a)
      let entrada: User = { name: "José", saldo: 40 }
      let saida: User = { name: "José", saldo: 10 }

      expect(performPurchase(entrada, 30)).toStrictEqual(saida)

      //b)
      entrada = { name: "Carol", saldo: 30 }
      saida = { name: "Carol", saldo: 0 }

      expect(performPurchase(entrada, 30)).toStrictEqual(saida)

      //c)
      entrada = { name: "Felipe Moura Brasil", saldo: 20 }
      expect(performPurchase(entrada, 30)).toStrictEqual(undefined)
   })
})

// describe("Random tests...", () => {

//    test("...to learn some keywords", () => {
//       expect(2 + 3).toBe(5) 
//       expect([]).not.toBe([])

//       const emptyList: Array<any> = []
//       const anotherEmptyList: Array<any> = emptyList

//       expect(emptyList).toBe(anotherEmptyList) // passa com louvor (ambos objetos apontam para o mesmo endereço na memória do processo)
//       expect(emptyList.length).toBe(0)

//       expect([]).toEqual([]) // falharia com o toBe

//       expect(2 + 3).toBeGreaterThan(4)
//       expect(2 + 3).toBeLessThan(444000)
//       expect([1, 2, 3]).toContain(2)
//       expect([[1], [2], [3]]).not.toContain([2])
//       expect([[1], [2], [3]]).toContainEqual([2]) // falharia com o toContain

//    })
// })

// describe("async & error handling", () => {

//    test("Should connect to MySql", async () => {
//       const [tables] = await connection
//          .raw("SHOW TABLES")

//       console.table(tables)

//       expect(tables.length).toBeGreaterThan(0)
//    })

//    test("Error when table does not exist", async()=>{

//       expect.assertions(2)

//       try {
//          const users = await connection("usuarioss")

//          expect(users).toBeDefined() // não será acionado

//       } catch (error) {
//          expect(error.code).toBe("ER_NO_SUCH_TABLE")
//          expect(error).toBeInstanceOf(Error)
//       }
//    })

//    afterAll(() => { 
//       connection.destroy() 
//    })
// })