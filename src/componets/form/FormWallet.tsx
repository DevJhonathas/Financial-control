import { useState } from "react"

// import EmojiPicker, { EmojiClickData, Categories } from "emoji-picker-react";

import styles from './FormWallet.module.css';
import '../../Styles/global.css';

const Form = () => {
  //------Code to add Emotes and stylization in your wallet
  // const [text, setText] = useState<string>("");
  // const [editWallet, setEditWallet] = useState(false);
  const [modal, setModal] = useState(false);

  //------Code to add Emotes and stylization in your wallet
  // const handleEditWaller = (e:React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setEditWallet((prev) => !prev);
  // }

  const handleModal = (e:React.FormEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    setModal((prev) => !prev);
  }

  return (
    <div >
      <form className={styles.container_form}>
        {!modal ? <h2>Crie sua Wallet:</h2> : <h2>Criando Wallet:</h2>}
        {modal &&
        <>
          <label>Nome da Wallet:
            <input type="text" />
          </label>

          {/*------Code to add Emotes and stylization in your wallet*/}
          {/* {editWallet && 
            <>
              <label>Adicione Icon:
                <EmojiPicker onEmojiClick={(emojiData: EmojiClickData) => setText(emojiData.emoji)} 
                  searchDisabled={true} skinTonesDisabled={true}
                  previewConfig={{ showPreview: false }}
                  categories={[  
                    { name: "Smileys & Emotion", category: Categories.SMILEYS_PEOPLE }
                ]}/>
                <p>Emoji Selecionado: {text}</p>
                <label>Mudar background:
                  <input type="color"></input>
                  <button type="submit">Adiconar Icon</button>
                </label>
              </label>
            </>
          }
          {!editWallet ? <button onClick={handleEditWaller} className="btn btn_aproved">Editar Wallet</button> : <button onClick={handleEditWaller}className="btn btn_canceled">Cancelar Edição</button>} */}

          <label>Adicionar fundos
            <input type="number" />
            <button className="btn btn_aproved">Adicionar</button>
          </label>

          <label>Valor estimado:
            <input type="number" />
            <button className="btn btn_aproved">Adicionar</button>
          </label>
        </>
        }
      
        {!modal ? <button onClick={handleModal} className="btn btn_aproved">Criar Walllet</button> : <button className="btn btn_canceled">Cancelar Walllet</button>}

      </form>  
    </div>
  )
}

export default Form