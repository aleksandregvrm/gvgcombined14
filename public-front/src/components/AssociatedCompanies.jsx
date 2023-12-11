const AssociatedCompanies = ({images}) => {
    return (
      <div className='company-images'>{images.map((image,index)=>{
        return <img className={`${index === 1? 'align-image' : ''}`} key={index} srcSet={image} alt="" />
      })}</div>
    );
  }
export default AssociatedCompanies;
