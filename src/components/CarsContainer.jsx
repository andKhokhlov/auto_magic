import icon from '../images/free-icon-car-wash-2211392.png'
import './CarsContainer.css'

function CarsContainer(){
    return(
        <div className="Cars_container">
            <div className="Section_header">
                <img className="SectionIcon" src={icon}></img>
                <h2>Вот машины в вашем городе. В других — другие.</h2>
            </div>
            <div className='Cars_container_content'>
                <div className='Cars_section_header_mobile'>
                    <div className='Cars_section_header_title_mobile' style={{color: 'rgb(19,136,8)'}}>На каждый день</div>
                    <div className='Cars_section_header_subtitle_mobile'>Нужны 21 год жизни и 2 года стажа</div>
                </div>
                <div className='Cars_section_models'>
                    
                </div>
            </div>
        </div>
    )
}

export default CarsContainer;