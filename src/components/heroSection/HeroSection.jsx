import heroImage from '../Photos/hero.png'

const HeroSection = () => {
    return (
        <div>
           <img className="h-65 lg:h-full" src={heroImage} alt="Hero" />
        </div>
    );
}

export default HeroSection;
