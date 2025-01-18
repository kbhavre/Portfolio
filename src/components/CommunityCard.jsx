import TextMask from './TextMask';
import PropTypes from 'prop-types';

const CommunityCard = ({title, img, position, duration}) => {
  return (
    <div className=' w-full border border-secondary  bg-secondary bg-opacity-40 gap-4 flex items-center justify-center px-2 py-1 md:px-3 md:py-2'>
        {/* Left Part */}
        <img className='h-14 w-14 md:h-20 md:w-20' src={img} alt="" />
       
        {/* Right Part */}
        <div className='flex flex-col gap-2 -space-y-1'>
            <h1 className='font-kyiv  font-medium text-xl md:text-2xl tracking-tight leading-none ' >
                <TextMask>{title}</TextMask>
            </h1>
            <div>
            <h4 className='font-raleway text-sm md:text-lg '>{position}</h4>
            <h6 className='font-raleway text-xs md:text-sm'>{duration}</h6>
            </div>
        </div>
        <div>
        </div>
    </div>
  )
};

CommunityCard.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
}

export default CommunityCard
