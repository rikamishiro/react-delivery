import { Blog } from "./Blog";

export function Home() {
    let title = "Bem-vindo(a)!";

    function handleClick() {
        title = "Tchau!";
        alert(title);
    }

    return (
        <div className="home">
            <h2 onClick={ handleClick }>{ title }</h2>
            < Blog />
        </div>
    )
}