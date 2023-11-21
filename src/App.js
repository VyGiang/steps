import { useState } from "react"

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]
export default function App() {
  return (
    <div className="App">
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>
      <StepMessage step={1}>
        <p>Read chidrent prop</p>
        <p>😊</p>
      </StepMessage>
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(1)
  const [isOpened, setIsOpened] = useState(true)

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1)
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1)
    }
  }
  console.log("step", step)
  console.log("message", messages[step - 1])
  //
  return (
    <>
      <button className="close" onClick={() => setIsOpened(!isOpened)}>
        &times;
      </button>
      {isOpened && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}{" "}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span> 👈 </span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next
              <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3> Step {step}</h3>
      {children}
    </p>
  )
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button style={{ background: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  )
}
