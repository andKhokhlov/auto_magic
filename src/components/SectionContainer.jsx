import icon from "../images/features.png";

function SectionContainer() {
    return (
        <div className="Section_container">
            <div className="Section_header">
                <img className="SectionIcon" src={icon} />
                <h2>Суперспособности Magic</h2>
            </div>
            <div className="Features_container_items"></div>
        </div>
    );
}
export default SectionContainer;
