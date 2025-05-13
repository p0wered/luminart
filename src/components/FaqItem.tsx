import ChevronRight from "../icons/ChevronRight.tsx";

export default function FaqItem({count, title}: string){
    return(
        <div className='faq-item'>
            <p><span>{count}</span> {title}</p>
            <ChevronRight size='20px' color='black'/>
        </div>
    )
}