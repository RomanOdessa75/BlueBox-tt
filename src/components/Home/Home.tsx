import { Table, Container, Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Container fluid className="vh-100 position-relative">
        <Row className="d-none d-md-flex position-absolute top-0 mt-0 me-3">
          <Col xs="auto">
            <h1
              style={{
                fontSize: '26px',
                marginTop: '10px',
                marginRight: '15px'
              }}
            >
              Home
            </h1>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <div className="mx-4" style={{ marginTop: '100px' }}>
              {' '}
              {/* Отступы для таблицы */}
              <Table
                className="table-hover table-striped"
                style={{
                  borderCollapse: 'separate' /* Убирает двойные границы */,
                  borderSpacing: '0px 0px' /* Убирает промежутки между строками */
                }}
              >
                <thead>
                  <tr>
                    <th className="border-top border-bottom border-secondary">ID</th>
                    <th className="border-top border-bottom border-secondary">Name</th>
                    <th className="border-top border-bottom border-secondary">Salary</th>
                    <th className="border-top border-bottom border-secondary">Country</th>
                    <th className="border-top border-bottom border-secondary">City</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Dakota Rice</td>
                    <td>$36,738</td>
                    <td>Niger</td>
                    <td>Oud-Turnhout</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Minerva Hooper</td>
                    <td>$23,789</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sage Rodriguez</td>
                    <td>$56,142</td>
                    <td>Netherlands</td>
                    <td>Baileux</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Philip Chaney</td>
                    <td>$38,735</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Doris Greene</td>
                    <td>$63,542</td>
                    <td>Malawi</td>
                    <td>Feldkirchen in Kärnten</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Mason Porter</td>
                    <td>$78,615</td>
                    <td>Chile</td>
                    <td>Gloucester</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home

//------------------------------------
// import React, { useEffect, useState } from 'react'
// import { Table, Container, Row, Col } from 'react-bootstrap'

// interface Employee {
//   id: number
//   name: string
//   salary: string
//   country: string
//   city: string
// }

// function Home() {
//   const [employees, setEmployees] = useState<Employee[]>([])

//   useEffect(() => {
//     // Имитация вызова бэкенда
//     const fetchEmployees = async () => {
//       // Здесь может быть ваш вызов API, например fetch или axios
//       const response = await fetch('/api/employees') // Замените URL на реальный эндпоинт
//       const data: Employee[] = await response.json()
//       setEmployees(data)
//     }

//     fetchEmployees()
//   }, [])

//   return (
//     <Container fluid>
//       <Row>
//         <Col md="12">
//           <Table className="table-hover table-striped">
//             <thead>
//               <tr>
//                 <th className="border-0">ID</th>
//                 <th className="border-0">Name</th>
//                 <th className="border-0">Salary</th>
//                 <th className="border-0">Country</th>
//                 <th className="border-0">City</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((employee) => (
//                 <tr key={employee.id}>
//                   <td>{employee.id}</td>
//                   <td>{employee.name}</td>
//                   <td>{employee.salary}</td>
//                   <td>{employee.country}</td>
//                   <td>{employee.city}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default Home
