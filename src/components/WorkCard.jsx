import PropTypes from 'prop-types';

const WorkCard = ({ title, img, tech }) => {
  return (
    <div className="flex flex-col border border-secondary rounded-lg p-3 gap-4">
      {/* Image Section */}
      <img src={img} className="object-cover h-4/5 rounded-lg" alt={title} />

      <div className="flex flex-col gap-2">
        {/* Title */}
        <h1 className="font-kyiv font-semibold text-myBlack text-2xl md:text-5xl tracking-wider leading-none z-10">
          {title}
        </h1>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((techItem, index) => (
            <h4 key={index} className="bg-secondary px-3 rounded-xl">
              {techItem}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

WorkCard.propTypes = {
    title: PropTypes.string.isRequired,  
    img: PropTypes.string.isRequired,     
    tech: PropTypes.arrayOf(PropTypes.string).isRequired, 
  };
  

export default WorkCard;