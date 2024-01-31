interface ITechsProps{
    tecnologias: string
}

export default function TechsProject({ tecnologias }: ITechsProps){
    return (
        <>
            <h1>teste</h1>
            <p>{tecnologias}</p>
        </>
    )
}