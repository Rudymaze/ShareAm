const template = document.createElement("template");
template.innerHTML = `
    <style> 
        .modal-details {
            display: flex;
            gap: 10px;
        }

        .modal-container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 4vh;
            height: 100%;
            width: 100%;
        }

        .times-icon {
            width: fit-content;
            color: blueviolet;
            margin-left: auto;
        }

        .times-icon:hover {
            cursor: pointer;
            color: red;
        }

        .modal {
            background-color: #ffffff;
            margin: auto;
            max-height: 70vh;
            max-width: 80vw;
            border-radius: 15px;
            overflow-y: auto;
        }

        @media (prefers-color-scheme: light) {   
            .modal-container {
              background-color: rgba(34,7,74, 0.5);
            }
        }   
        @media (prefers-color-scheme: dark) {
            .modal-container {
              background-color: rgba(31,32,31, 0.5);
            }
        }   
    </style>

    <div class="modal-container" id="modal-container">
        <div class="modal">
            <div class="times-icon" id="close-icon"><FaTimes /></div>
            <div class="modal-details">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
`;

class ModalContainer extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.append(template.content.cloneNode(true));
        document.addEventListener('DOMContentLoaded', () => {
            this.close();
        });
    }

    connectedCallback() {
        this.shadowRoot.getElementById('modal-container').addEventListener('click', (e) => {
            if (e.target === this.shadowRoot.getElementById('modal-container')) {
                this.close();
            }
        });

        this.shadowRoot.getElementById('close-icon').addEventListener('click', () => {
            this.close();
        });
    }

    open() {
        this.style.display = 'block';
    }

    close() {
        this.style.display = 'none';
    }
}

customElements.define("modal-container", ModalContainer);