import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment}) {

  const [ likeCount, setLikeCount ] = useState( 0 )

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https:github.com/jakeliny.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jakeliny</strong>

              <time 
                title='22 de Março às 09:06h'
                dateTime='2023-03-22 09:06:00'>
                Cerca de 1h atrás
             </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}