import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {

    console.log(props);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/giossaurus.png" />
                    <div className={styles.authorInfo}>
                        <strong>Giovanni Della Dea</strong>
                        <span>Front End Developer</span>
                    </div>
                </div>

                <time tittle="11 de Maio às 08:13h "dateTime="2022=05-11 08:13:30"> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentario"
                />
                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>


            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}