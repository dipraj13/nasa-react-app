export default function Footer(props){
    const {showModal, handleToggleModal, data} = props

    return (
        <footer>
            <div className="bgGradient">

            </div>
            <div>
            <h1>
                {data.date+ " "+"APOD"  }
            </h1>
            <h2>
                {data?.title}
            </h2>
            <h1>
                Made with ❤ by Dipraj
            </h1>   
            
            </div>
            
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}