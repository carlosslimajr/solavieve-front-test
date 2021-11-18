import React, { useEffect, useState } from 'react'
import { Button, SubTitle, TextArea, Title } from './components/commonStyles'
import Header from './components/Header'
import Modal from './components/Modal'
import RateComponent from './components/RateComponent'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    rateOne: null,
    rateTwo: null,
    rateThree: null,
    comment: null
  })
  const [enableButton, setEnableButton] = useState(false)

  const handleRating = (value: number, id: string): void => {
    setForm({ ...form, [id]: value })
  }
  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, id } = event.currentTarget

    setForm({ ...form, [id]: value })
  }

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  const showResults = () => {
    alert(
      `RateOne: ${form.rateOne} | RateTwo: ${form.rateTwo} | RateThree: ${form.rateThree} | Comment : ${form.comment}`
    )
  }

  //Enabling button when everything is filled 
  useEffect(() => {
    const formArray = [form.rateOne, form.rateTwo, form.rateThree, form.comment]
    const foundNull = formArray.includes(null)
    if (foundNull) {
      setEnableButton(false)
      return
    }
    setEnableButton(true)

  }, [form])
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Title>Leave a feedback!</Title>
        <RateComponent id="rateOne" handleCLick={handleRating} title="Rate your experience from 0 to 5 stars:" />
        <RateComponent id="rateTwo" handleCLick={handleRating} title="How satisfied are you with the payment process?" />
        <RateComponent id="rateThree" handleCLick={handleRating} title="How satisfied are you with our customer service?" />
        <SubTitle margin="5.5rem 0 3.3rem">Please leave a comment about your experience below:</SubTitle>
        <TextArea id="comment" onChange={handleText} placeholder="Type your comment here..." name="" cols={30} rows={10}></TextArea>
        <Button disabled={!enableButton} onClick={handleModal}>Send feedBack</Button>
        <Modal showResults={showResults} open={isOpen} closeModal={handleModal} />
      </main>
    </div>
  );
}

export default App;
