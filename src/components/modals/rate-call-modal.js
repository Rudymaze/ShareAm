const template = document.createElement("template");
template.innerHTML = `
    <style>
 * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: poppins-bold;
  src: url(../../assets/fonts/Poppins-Bold.ttf);
}
@font-face {
  font-family: poppins-regular;
  src: url(../../assets/fonts/Poppins-Regular.ttf);
}
@font-face {
  font-family: poppins-medium;
  src: url(../../assets/fonts/Poppins-Medium.ttf);
}
@font-face {
  font-family: Rubik;
  src: url(../../assets/fonts/Rubik-VariableFont_wght.ttf);
}

.call-rate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  padding: 8vh 10vw 10vh 10vw;
}

.rate-text {
  color: #fff;
  text-align: center;
  font-family: Poppins-regular;
  font-size: 1rem;
  font-weight: 500;
}

.star-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7vw;
  margin: 2vh 0 3vh 0;
}

.feedback-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
}

.input-wrapper {
  width: 32vw;
  height: fit-content;
  padding: 1vh 1.5vw;
}

.schedule-purpose {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.purpose-text {
  color: #9a9a9a;
  font-family: poppins-regular;
  font-size: 0.8rem;
  width: 100%;
}

.schedule-purpose-input-wrap {
  display: flex;
  flex-direction: column;
  border: 1px solid #8a8787;
  border-radius: 7px;
  padding: 0.5vh 0.5vw;
}

.schedule-purpose-input {
  font-family: poppins-medium;
  font-size: 0.8rem;
  outline: none;
  resize: none;
  padding: 2vh 0 2vh 0.5vw;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: none;
  height: fit-content;
  width: 100%;
  overflow: scroll;
}

.schedule-purpose-input::-webkit-scrollbar {
  display: none;
}

.counter {
  float: right;
  display: flex;
  margin-right: 0.1vw;
  margin-left: auto;
  font-family: poppins-regular;
  font-size: 0.8vw;
  color: #9a9a9a;
}

.emoji-and-btn {
  display: flex;
  align-items: center;
  padding-top: 2vh;
}

.emoji-and-btn span {
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}

#done-btn {
  background: #1376e3;
  color: #fff;
  padding: 1.2vh 2vw;
  font-size: 0.8rem;
  width: fit-content;
  border: none;
  border-radius: 5px;
  margin-left: auto;
  cursor: pointer;
}

/* ------------ LIGHT AND DARK MODE ----------- */
@media (prefers-color-scheme: light) {
.call-rate {
  background-color: #22074a;
}

.feedback-wrapper {
  background-color: #fff;
}
}

@media (prefers-color-scheme: dark) {
 .call-rate {
  background-color: #2a282d;
}

.feedback-wrapper {
  background-color: #cecccc;
}
.schedule-purpose-input {
 background-color: #e4e4e4;      
 }
}

  
</style>

     <div class="call-rate">
        <p class="rate-text">Rate this call</p>
        <div class="star-wrapper">
          <span id="star star-1">
            <svg
              width="32"
              height="31"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7304 2.75997L26.7313 11.9956C27.1444 13.2672 28.3294 14.1282 29.6664 14.1282H39.3774C41.8235 14.1282 42.8406 17.2583 40.8616 18.6961L33.0053 24.4041C31.9236 25.19 31.471 26.583 31.8841 27.8546L34.885 37.0903C35.6409 39.4167 32.9782 41.3512 30.9993 39.9134L23.1429 34.2055C22.0612 33.4196 20.5965 33.4196 19.5148 34.2055L11.6585 39.9134C9.67955 41.3512 7.01688 39.4167 7.77277 37.0903L10.7736 27.8546C11.1868 26.583 10.7342 25.19 9.65249 24.4041L1.79615 18.6961C-0.182807 17.2583 0.834239 14.1282 3.28036 14.1282H12.9913C14.3284 14.1282 15.5133 13.2672 15.9265 11.9956L18.9274 2.75997C19.6833 0.433567 22.9745 0.433566 23.7304 2.75997Z"
                fill="white"
                stroke="white"
                stroke-width="0.561133"
              />
            </svg>
          </span>
          <span id="star star-2">
            <svg
              width="32"
              height="31"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7304 2.75997L26.7313 11.9956C27.1444 13.2672 28.3294 14.1282 29.6664 14.1282H39.3774C41.8235 14.1282 42.8406 17.2583 40.8616 18.6961L33.0053 24.4041C31.9236 25.19 31.471 26.583 31.8841 27.8546L34.885 37.0903C35.6409 39.4167 32.9782 41.3512 30.9993 39.9134L23.1429 34.2055C22.0612 33.4196 20.5965 33.4196 19.5148 34.2055L11.6585 39.9134C9.67955 41.3512 7.01688 39.4167 7.77277 37.0903L10.7736 27.8546C11.1868 26.583 10.7342 25.19 9.65249 24.4041L1.79615 18.6961C-0.182807 17.2583 0.834239 14.1282 3.28036 14.1282H12.9913C14.3284 14.1282 15.5133 13.2672 15.9265 11.9956L18.9274 2.75997C19.6833 0.433567 22.9745 0.433566 23.7304 2.75997Z"
                fill="white"
                stroke="white"
                stroke-width="0.561133"
              />
            </svg>
          </span>
          <span id="star star-3">
            <svg
              width="32"
              height="31"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7304 2.75997L26.7313 11.9956C27.1444 13.2672 28.3294 14.1282 29.6664 14.1282H39.3774C41.8235 14.1282 42.8406 17.2583 40.8616 18.6961L33.0053 24.4041C31.9236 25.19 31.471 26.583 31.8841 27.8546L34.885 37.0903C35.6409 39.4167 32.9782 41.3512 30.9993 39.9134L23.1429 34.2055C22.0612 33.4196 20.5965 33.4196 19.5148 34.2055L11.6585 39.9134C9.67955 41.3512 7.01688 39.4167 7.77277 37.0903L10.7736 27.8546C11.1868 26.583 10.7342 25.19 9.65249 24.4041L1.79615 18.6961C-0.182807 17.2583 0.834239 14.1282 3.28036 14.1282H12.9913C14.3284 14.1282 15.5133 13.2672 15.9265 11.9956L18.9274 2.75997C19.6833 0.433567 22.9745 0.433566 23.7304 2.75997Z"
                fill="white"
                stroke="white"
                stroke-width="0.561133"
              />
            </svg>
          </span>
          <span id="star star-4">
            <svg
              width="32"
              height="31"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7304 2.75997L26.7313 11.9956C27.1444 13.2672 28.3294 14.1282 29.6664 14.1282H39.3774C41.8235 14.1282 42.8406 17.2583 40.8616 18.6961L33.0053 24.4041C31.9236 25.19 31.471 26.583 31.8841 27.8546L34.885 37.0903C35.6409 39.4167 32.9782 41.3512 30.9993 39.9134L23.1429 34.2055C22.0612 33.4196 20.5965 33.4196 19.5148 34.2055L11.6585 39.9134C9.67955 41.3512 7.01688 39.4167 7.77277 37.0903L10.7736 27.8546C11.1868 26.583 10.7342 25.19 9.65249 24.4041L1.79615 18.6961C-0.182807 17.2583 0.834239 14.1282 3.28036 14.1282H12.9913C14.3284 14.1282 15.5133 13.2672 15.9265 11.9956L18.9274 2.75997C19.6833 0.433567 22.9745 0.433566 23.7304 2.75997Z"
                fill="white"
                stroke="white"
                stroke-width="0.561133"
              />
            </svg>
          </span>
          <span id="star star-5">
            <svg
              width="32"
              height="31"
              viewBox="0 0 43 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7304 2.75997L26.7313 11.9956C27.1444 13.2672 28.3294 14.1282 29.6664 14.1282H39.3774C41.8235 14.1282 42.8406 17.2583 40.8616 18.6961L33.0053 24.4041C31.9236 25.19 31.471 26.583 31.8841 27.8546L34.885 37.0903C35.6409 39.4167 32.9782 41.3512 30.9993 39.9134L23.1429 34.2055C22.0612 33.4196 20.5965 33.4196 19.5148 34.2055L11.6585 39.9134C9.67955 41.3512 7.01688 39.4167 7.77277 37.0903L10.7736 27.8546C11.1868 26.583 10.7342 25.19 9.65249 24.4041L1.79615 18.6961C-0.182807 17.2583 0.834239 14.1282 3.28036 14.1282H12.9913C14.3284 14.1282 15.5133 13.2672 15.9265 11.9956L18.9274 2.75997C19.6833 0.433567 22.9745 0.433566 23.7304 2.75997Z"
                fill="white"
                stroke="white"
                stroke-width="0.561133"
              />
            </svg>
          </span>
        </div>
        <div class="feedback-wrapper">
          <div class="input-wrapper">
            <form class="schedule-purpose">
              <p class="purpose-text">Please leave a feedback</p>
              <div class="schedule-purpose-input-wrap">
                <textarea
                  name="text"
                  maxlength="200"
                  class="schedule-purpose-input"
                  id="textarea"
                ></textarea>

                <div class="emoji-and-btn">
                  <span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.99626 0.450195C2.81056 0.450195 0.228027 3.03273 0.228027 6.21842C0.228027 9.40412 2.81056 11.9867 5.99626 11.9867C9.18195 11.9867 11.7645 9.40412 11.7645 6.21842C11.7645 3.03273 9.18195 0.450195 5.99626 0.450195ZM9.53117 9.75334C8.65465 10.6272 7.48417 11.1435 6.24779 11.2016C5.01142 11.2596 3.79771 10.8552 2.84318 10.0673C1.88865 9.27935 1.26166 8.16425 1.08439 6.93927C0.907118 5.71429 1.19226 4.46719 1.88426 3.44097C2.57626 2.41474 3.62553 1.68291 4.82764 1.38807C6.02975 1.09322 7.29857 1.25649 8.38688 1.84606C9.47518 2.43562 10.305 3.40925 10.7147 4.57724C11.1243 5.74522 11.0845 7.02388 10.6028 8.16407C10.3518 8.7582 9.98789 9.29794 9.53117 9.75334Z"
                        fill="#A8A8A8"
                      />
                      <path
                        d="M3.49594 4.87207H4.45731V5.83344H3.49594V4.87207ZM7.5337 4.87207H8.49507V5.83344H7.5337V4.87207ZM7.97326 7.44855C7.82451 7.82391 7.56611 8.14576 7.23176 8.37212C6.89741 8.59848 6.50262 8.71886 6.09885 8.71756H5.89216C5.48838 8.71887 5.09357 8.5985 4.75921 8.37214C4.42484 8.14578 4.16644 7.82393 4.01768 7.44855L3.98694 7.37164H3.15869L3.30367 7.7341C3.5106 8.25143 3.8678 8.6949 4.32918 9.00728C4.79057 9.31967 5.33497 9.48664 5.89216 9.48665H6.09885C6.65604 9.48664 7.20045 9.31967 7.66183 9.00728C8.12321 8.6949 8.48041 8.25143 8.68735 7.7341L8.83232 7.37164H8.004L7.97326 7.44855Z"
                        fill="#A8A8A8"
                      />
                    </svg>
                  </span>
                  <button id="done-btn">Done</button>
                </div>
              </div>
              <span class="counter">
                <p id="input-limit-text">0</p>
                /
                <p>200</p>
              </span>
            </form>
          </div>
        </div>
      </div>
   
`;

class RateCall extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }

  connectedCallback() {
    const doneButton = this.shadowRoot.getElementById("done-btn");

    if (doneButton) {
      doneButton.addEventListener("click", this.handleCallRating);
    } else {
      console.error("Done button not found");
    }
  }

  handleCallRating = () => {
    this.gotojoinmeeting();
  };

  gotojoinmeeting = async () => {
    ipcRenderer.send("navigate-to-join-meeting");
  };
}

customElements.define("rate-call", RateCall);

// class RateCall extends HTMLElement {
//   constructor() {
//     super();
//     const shadowRoot = this.attachShadow({ mode: "open" });
//     let clone = template.content.cloneNode(true);
//     shadowRoot.append(clone);
//   }

//   connectedCallback() {
//     const doneButton = this.shadowRoot.getElementById("done-btn");

//     if (doneButton) {
//       doneButton.addEventListener("click", this.handleCallRating);
//     } else {
//       console.error("Done button not found");
//     }
//   }

//   handleCallRating = () => {
//     // const meetingToken = sessionStorage.getItem("meetingToken");
// this.gotojoinmeeting();
// // if (meetingToken) {
// //   this.gotojoinmeeting();
// //   // sessionStorage.removeItem("meetingToken");
// // }
//   }

//   gotojoinmeeting = async () => {
//     window.location.href = "../../screens/authentication/join_meeting.html";
//   }
// }

// customElements.define("rate-call", RateCall);

{
  /* <div className="flex space-x-3 mt-2">
{[1, 2, 3, 4, 5].map((num) => (
  <button key={num} onClick={() => setRating(num)}>
    <StarIcon
      className="w-6 h-6"
      fill={rating >= num ? "#fdb022" : "#000"}
    />
  </button>
))}
</div> */
}
