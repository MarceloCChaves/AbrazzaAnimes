import { FormEvent, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Container } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Help() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  function handleReset(){
    setTitle("")
    setDescription("")
  }
  function handleRequestForm(event: FormEvent) {
    event.preventDefault();
    toast.success("Thank you for your attention, so we can make AbrazzaAnimes even better")
  }
  return (
    <div>
      <ToastContainer/>
      <Navbar></Navbar>
      <Container onSubmit={handleRequestForm}>
        <div className="content">
          <div className="title">
            <label>Hi, how can we help you?</label>
            <input
              type="text"
              placeholder="type..."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="describe">
            <label>Describe your problem</label>

            <textarea cols={30} rows={10} placeholder="Describe..." value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
          </div>

          <div className="buttons">
            <button type="submit" onClick={handleRequestForm}>Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
