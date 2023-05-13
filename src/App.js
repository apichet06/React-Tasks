import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Item from './component/Item';
import AddForm from './component/Addform';
import { useState, useEffect } from 'react'
import "./App.css"
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function App() {
  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [editId, setEditId] = useState(null)
  const [title, setTitle] = useState("")
  const [validated, setValidated] = useState(false);
  // const [theme, setTheme] = useState("light")


  const [isDarkMode, setIsDarkMode] = useState(false);


  const bodyClass = isDarkMode ? 'dark text-white-50' : 'light';

  // เกิด effect ที่ครั้งที่มีการเคลื่อนไหว
  useEffect(() => {
    // ฐานข้อมูล
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
 
  function deleteTask(id) {
    Swal.fire({
      title: 'ต้องการลบข้อมูลนี้หรือไม่?', 
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน!',
      cancelButtonText: 'ยกเลิก!',
    }).then((result) => {
      if (result.isConfirmed) {
        const result = tasks.filter(t => t.id !== id)
        setTask(result)
      }
    }) 
  }

  function saveTask(e) {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (form.checkValidity() === true) {
      if (editId) {
        // update ข้อมูล
        const updateTask = tasks.map((item) => {
          // รายการใดมีรหัสตรงกับรหัสแก้ไข
          if (item.id === editId) {
            return {
              ...item, title: title
            }

          }
          return item;
        })
        setTask(updateTask);
        setEditId(null)
      } else {
        // เพิ่มรายการใหม่
        const newTask = {
          id: Math.floor(Math.random() * 1000),
          title: title
        }
        setTask([...tasks, newTask])

      }


    }
    setTitle("")
    setValidated(true);

  }


  function editTask(id) {
    setEditId(id)
    const editTask = tasks.find(item => item.id === id)
    setTitle(editTask.title);
    //
  }


  return (
    <div className={`App bg-${bodyClass} min-vh-100`}   >
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Container fluid>
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} validated={validated} editId={editId} />
        <section >
          {
            tasks.map((data) => (
              <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
            ))
          }
        </section>
      </Container>
    </div>

  );
}


